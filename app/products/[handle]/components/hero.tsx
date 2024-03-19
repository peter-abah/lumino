import { getProducts } from "@/lib/shopify";
import { Collection, Maybe, Product } from "@/types/shopify";
import HeroFeaturedProduct from "./hero_featured_product";

const DEFAULT_BACKGROUND = "#57351E";
type Props = {
  collection: Collection;
};
export default async function Hero({ collection }: Props) {
  const collectionFeaturedProduct = (
    await getProducts({ query: `tag:${collection.handle}-featured-product` })
  )[0] as Maybe<Product>;
  return (
    <section
      className="h-[460px] p-12 flex flex-col justify-center relative"
      style={{ background: DEFAULT_BACKGROUND }}
    >
      <div className="max-w-[48vw] text-white">
        <h1 className="text-[64px] font-bold">{collection.title}</h1>
        <p>{collection.description}</p>
      </div>

      {collectionFeaturedProduct && (
        <HeroFeaturedProduct product={collectionFeaturedProduct} />
      )}
    </section>
  );
}
