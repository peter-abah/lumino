import ProductCard from "@/components/product_card";
import { getCollectionProducts, reshapeProductsToVariantProducts } from "@/lib/shopify";
import { Collection } from "@/types/shopify";
import Link from "next/link";

type Props = {
  collection: Collection;
};

export default async function CollectionProducts({ collection }: Props) {
  const products = await getCollectionProducts({ collection: collection.handle });
  const variantProducts = reshapeProductsToVariantProducts(products);

  return (
    <section className="px-12 mb-20 mt-12 flex flex-col justify-center">
      {variantProducts.length > 0 ? (
        <ul className="flex flex-wrap gap-x-6 gap-y-12">
          {variantProducts.map((product) => (
            <ProductCard key={product.handle + product.variant.id} product={product} />
          ))}
        </ul>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center">
          <p className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
            No products available at the moment
          </p>
          <Link href="/" className="font-bold bg-black text-white px-10 py-4.5 rounded-button">
            Continue Shopping
          </Link>
        </div>
      )}
    </section>
  );
}
