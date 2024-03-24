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
      className="h-[460px] p-5 md:p-8 lg:p-12 flex flex-col justify-center relative"
      style={{ background: DEFAULT_BACKGROUND }}
    >
      <div className="max-w-[48rem] flex flex-col gap-4 sm:gap-6 text-white text-center md:text-left">
        <h1 className="text-5xl md:text-[64px] font-bold">{collection.title}</h1>
        <p className="text-sm md:text-base leading-normal">{collection.description}</p>
      </div>

      {collectionFeaturedProduct && (
        <HeroFeaturedProduct product={collectionFeaturedProduct} />
      )}
    </section>
  );
}
