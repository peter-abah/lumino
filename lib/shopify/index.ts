import "server-only";

import {
  Connection,
  Image,
  Product,
  ProductVariant,
  ShopifyCollectionProductsOperation,
  ShopifyProduct,
  VariantProduct,
} from "@/types/shopify";
import { revalidateTag } from "next/cache";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { ensureStartsWith } from "..";
import { HIDDEN_PRODUCT_TAG, SHOPIFY_GRAPHQL_API_ENDPOINT, TAGS } from "../constants";
import { isShopifyError } from "../type_guards";
import { getCollectionProductsQuery } from "./queries/collection";

const domain = process.env.SHOPIFY_STORE_DOMAIN
  ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, "https://")
  : "";
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

type ExtractVariables<T> = T extends { variables: object } ? T["variables"] : never;

export async function shopifyFetch<T>({
  cache = "force-cache",
  headers,
  query,
  tags,
  variables,
}: {
  cache?: RequestCache;
  headers?: HeadersInit;
  query: string;
  tags?: string[];
  variables?: ExtractVariables<T>;
}): Promise<{ status: number; body: T } | never> {
  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      ...(tags && { next: { tags } }),
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body,
    };
  } catch (e) {
    if (isShopifyError(e)) {
      throw {
        cause: e.cause?.toString() || "unknown",
        status: e.status || 500,
        message: e.message,
        query,
      };
    }

    throw {
      error: e,
      query,
    };
  }
}

// This is called from `app/api/revalidate.ts` so providers can control revalidation logic.
export async function revalidate(req: NextRequest): Promise<NextResponse> {
  // We always need to respond with a 200 status code to Shopify,
  // otherwise it will continue to retry the request.
  const collectionWebhooks = ["collections/create", "collections/delete", "collections/update"];
  const productWebhooks = ["products/create", "products/delete", "products/update"];
  const topic = headers().get("x-shopify-topic") || "unknown";
  const secret = req.nextUrl.searchParams.get("secret");
  const isCollectionUpdate = collectionWebhooks.includes(topic);
  const isProductUpdate = productWebhooks.includes(topic);

  if (!secret || secret !== process.env.SHOPIFY_REVALIDATION_SECRET) {
    console.error("Invalid revalidation secret.");
    return NextResponse.json({ status: 200 });
  }

  if (!isCollectionUpdate && !isProductUpdate) {
    // We don't need to revalidate anything for any other topics.
    return NextResponse.json({ status: 200 });
  }

  if (isCollectionUpdate) {
    console.log("COLLECTION REVALIDATED");
    revalidateTag(TAGS.collections);
  }

  if (isProductUpdate) {
    console.log("PRODUCT REVALIDATED");
    revalidateTag(TAGS.products);
  }

  return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}

const removeEdgesAndNodes = <T = any>(array: Connection<T>) => {
  return array.edges.map((edge) => edge?.node);
};

const reshapeImage = (image: Image, productTitle: string) => {
  const filename = image.url.match(/.*\/(.*)\..*/)?.[1];

  return {
    ...image,
    altText: image.altText || `${productTitle} - ${filename || ""}`,
  };
};

const reshapeImages = (images: Connection<Image>, productTitle: string) => {
  const flattened = removeEdgesAndNodes<Image>(images);

  return flattened.map((image) => {
    return reshapeImage(image, productTitle);
  });
};

const reshapeVariants = (variants: ProductVariant[]) => {
  const reshapedVariants = [];

  for (const variant of variants) {
    const { image, ...rest } = variant;
    reshapedVariants.push({ ...rest, image: image ? reshapeImage(image, variant.title) : image });
  }

  return reshapedVariants;
};

const reshapeProduct = (product: ShopifyProduct, filterHiddenProducts: boolean = true) => {
  if (!product || (filterHiddenProducts && product.tags.includes(HIDDEN_PRODUCT_TAG))) {
    return undefined;
  }

  const { images, variants, ...rest } = product;

  return {
    ...rest,
    images: reshapeImages(images, product.title),
    variants: reshapeVariants(removeEdgesAndNodes(variants)),
  };
};

export const reshapeVariantsToProducts = (product: Product): VariantProduct[] => {
  const variantProducts: VariantProduct[] = [];
  const { variants, ...rest } = product;

  for (const variant of variants) {
    variantProducts.push({ ...rest, variant });
  }

  return variantProducts;
};

export const reshapeProductsToVariantProducts = (products: Product[]) => {
  const variantProducts: VariantProduct[] = [];

  for (const product of products) {
    const newVariantProducts = reshapeVariantsToProducts(product);
    variantProducts.push(...newVariantProducts);
  }

  return variantProducts;
};

const reshapeProducts = (products: ShopifyProduct[]) => {
  const reshapedProducts = [];

  for (const product of products) {
    if (product) {
      const reshapedProduct = reshapeProduct(product);

      if (reshapedProduct) {
        reshapedProducts.push(reshapedProduct);
      }
    }
  }

  return reshapedProducts;
};

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey,
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  const res = await shopifyFetch<ShopifyCollectionProductsOperation>({
    query: getCollectionProductsQuery,
    tags: [TAGS.collections, TAGS.products],
    variables: {
      handle: collection,
      reverse,
      sortKey: sortKey === "CREATED_AT" ? "CREATED" : sortKey,
    },
  });

  if (!res.body.data.collection) {
    console.log(`No collection found for \`${collection}\``);
    return [];
  }

  return reshapeProducts(removeEdgesAndNodes(res.body.data.collection.products));
}
