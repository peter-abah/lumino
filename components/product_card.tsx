"use client";

import { formatPriceToUserLocale, getVariantOption } from "@/lib";
import { BLUR_DATA_URL, SHOPIFY_COLOR_OPTION_T0_CSS_BACKGROUND } from "@/lib/constants";
import { Product, VariantProduct } from "@/types/shopify";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  product: Product | VariantProduct;
};
export default function ProductCard({ product }: Props) {
  const [currentVariantIndex, setCurrentVariantIndex] = useState<number>(0);

  const isVariantProduct = "variant" in product;
  const currentVariant = isVariantProduct ? product.variant : product.variants[currentVariantIndex];

  return (
    <div className="bg-white w-full min-h-full rounded-md">
      <Link
        href={`/products/${product.handle}`}
        className="w-full rounded-md overflow-hidden block relative aspect-square group"
      >
        <Image
          src={currentVariant.image?.url || product.featuredImage.url}
          fill
          alt={currentVariant.image?.altText || product.featuredImage.altText}
          blurDataURL={BLUR_DATA_URL}
          placeholder="blur"
          className="group-hover:scale-105 duration-[1s]"
        />
      </Link>

      <div className="p-5 flex flex-col gap-0.5">
        <div className="flex gap-2 justify-between">
          <Link href={`/products/${product.handle}`} className="font-bold">
            {product.title}
          </Link>
        </div>
        <p className="text-text/70 flex gap-1">
          <span>{currentVariant.price.currencyCode}</span>
          <span>{formatPriceToUserLocale(currentVariant.price.amount)}</span>
        </p>

        <div className="flex items-center gap-1 mt-1">
          {!isVariantProduct &&
            product.variants.length > 1 &&
            product.variants.map((variant, index) => {
              const colorOption = getVariantOption(variant, "Color");
              if (!colorOption) return;

              return (
                <button
                  type="button"
                  key={variant.id}
                  onClick={() => setCurrentVariantIndex(index)}
                  className={clsx(
                    "w-3.5 h-3.5 aspect-square rounded-full relative",
                    currentVariant.id === variant.id &&
                      "m-1 before:shadow-[0_0_0_2px] before:absolute before:-inset-0.5 before:rounded-full"
                  )}
                  style={{
                    background: SHOPIFY_COLOR_OPTION_T0_CSS_BACKGROUND.get(colorOption.value),
                  }}
                >
                  <span className="sr-only">{colorOption.value}</span>
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}
