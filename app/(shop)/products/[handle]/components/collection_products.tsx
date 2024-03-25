import ProductCard from "@/components/product_card";
import { getCollectionProducts, reshapeProductsToVariantProducts } from "@/lib/shopify";
import { Collection } from "@/types/shopify";

type Props = {
  collection: Collection;
};

export default async function CollectionProducts({ collection }: Props) {
  const products = await getCollectionProducts({ collection: collection.handle });
  const variantProducts = reshapeProductsToVariantProducts(products);

  return (
    <section className="px-12 mb-20 mt-12 flex flex-col justify-center">
      <ul className="flex flex-wrap gap-x-6 gap-y-12">
        {variantProducts.map((product) => (
          <ProductCard key={product.handle + product.variant.id} product={product} />
        ))}
      </ul>
    </section>
  );
}
