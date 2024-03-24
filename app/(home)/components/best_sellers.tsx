import ArrowRight from "@/components/icons/arrow_right_icon";
import ProductCard from "@/components/product_card";
import { getCollectionProducts } from "@/lib/shopify";
import Link from "next/link";

const BEST_SELLERS_COLLECTION_HANDLE = "best-sellers";
export default async function BestSellers() {
  const products = await getCollectionProducts({ collection: BEST_SELLERS_COLLECTION_HANDLE });

  return (
    <section className="px-5 md:px-8 lg:px-12 pb-12 md:pb-16 lg:pb-20">
      <header className="flex flex-col gap-4 lg:flex-row justify-between lg:items-end mb-8 md:mb-12">
        <h2 className="text-[2rem] md:text-[2.5rem] font-bold">Best sellers</h2>
        <Link
          href={`/collections/${BEST_SELLERS_COLLECTION_HANDLE}`}
          className="flex gap-3 items-center group"
        >
          <span className="text-sm md:text-base fancy-hover-underline">View all</span>
          <span className="grid place-items-center w-6 h-6 rounded-full bg-text/10  group-hover:bg-text group-hover:text-white">
            <ArrowRight />
          </span>
        </Link>
      </header>

      <ul className="flex overflow-auto gap-6 no-scrollbar snap-x snap-mandatory">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
}
