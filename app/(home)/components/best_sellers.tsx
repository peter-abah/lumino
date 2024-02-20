import ArrowRight from "@/components/icons/arrow_right_icon";
import { getCollectionProducts } from "@/lib/shopify";
import Link from "next/link";
import BestSellerItem from "./best_seller_item";

// const BEST_SELLER_ITEMS: TBestSellerItem[] = [
//   {
//     name: "MH40 Wireless (Silver Metal / Navy Coated Canvas)",
//     rating: "4.6",
//     price: 299,
//     variants: ["Silver Metal / Navy Coated Canvas"],
//     images: {
//       "Silver Metal / Navy Coated Canvas": {
//         normal: "/images/mh40.png",
//         onHover: "/images/mh40-hover.png",
//       },
//     },
//     link: "#",
//     styles: {
//       "Silver Metal / Navy Coated Canvas": {
//         selectVariantButton: "bg-[linear-gradient(135deg,black_50%,lightgrey_50%)]",
//       },
//     },
//   },
//   {
//     name: "MW08 Sport (Green Sapphire Glass / Black Kevlar® Case)",
//     rating: "4.8",
//     price: 348,
//     variants: ["Green Sapphire Glass / Black Kevlar® Case"],
//     images: {
//       "Green Sapphire Glass / Black Kevlar® Case": {
//         normal: "/images/mw08.png",
//         onHover: "/images/mw08-hover.png",
//       },
//     },
//     link: "#",
//     styles: {
//       "Green Sapphire Glass / Black Kevlar® Case": {
//         selectVariantButton: "bg-[linear-gradient(90deg,darkgreen,black)]",
//       },
//     },
//   },
//   {
//     name: "MH40 Wireless (Silver Metal / Navy Coated Canvas)",
//     rating: "4.6",
//     price: 299,
//     variants: ["Silver Metal / Navy Coated Canvas"],
//     images: {
//       "Silver Metal / Navy Coated Canvas": {
//         normal: "/images/mh40.png",
//         onHover: "/images/mh40-hover.png",
//       },
//     },
//     link: "#",
//     styles: {
//       "Silver Metal / Navy Coated Canvas": {
//         selectVariantButton: "bg-[linear-gradient(135deg,black_50%,lightgrey_50%)]",
//       },
//     },
//   },
//   {
//     name: "MW08 Sport (Green Sapphire Glass / Black Kevlar® Case)",
//     rating: "4.8",
//     price: 348,
//     variants: ["Green Sapphire Glass / Black Kevlar® Case"],
//     images: {
//       "Green Sapphire Glass / Black Kevlar® Case": {
//         normal: "/images/mw08.png",
//         onHover: "/images/mw08-hover.png",
//       },
//     },
//     link: "#",
//     styles: {
//       "Green Sapphire Glass / Black Kevlar® Case": {
//         selectVariantButton: "bg-[linear-gradient(135deg,black_50%,lightgrey_50%)]",
//       },
//     },
//   },
//   {
//     name: "MH40 Wireless (Silver Metal / Navy Coated Canvas)",
//     rating: "4.6",
//     price: 299,
//     variants: ["Silver Metal / Navy Coated Canvas"],
//     images: {
//       "Silver Metal / Navy Coated Canvas": {
//         normal: "/images/mh40.png",
//         onHover: "/images/mh40-hover.png",
//       },
//     },
//     link: "#",
//     styles: {
//       "Silver Metal / Navy Coated Canvas": {
//         selectVariantButton: "bg-[linear-gradient(135deg,black_50%,lightgrey_50%)]",
//       },
//     },
//   },
//   {
//     name: "MH40 Wireless Ear Pads",
//     rating: "4.5",
//     price: 49,
//     variants: ["Black", "Brown", "Grey", "Navy"],
//     images: {
//       Black: {
//         normal: "/images/mh40-pads-black.jpg",
//         onHover: "/images/mh40-pads-brown.jpg",
//       },
//       Brown: {
//         normal: "/images/mh40-pads-brown.jpg",
//         onHover: "/images/mh40-pads-gray.png",
//       },
//       Grey: {
//         normal: "/images/mh40-pads-gray.png",
//         onHover: "/images/mh40-pads-navy.jpg",
//       },
//       Navy: {
//         normal: "/images/mh40-pads-navy.jpg",
//         onHover: "/images/mh40-pads-brown.jpg",
//       },
//     },
//     link: "#",
//     styles: {
//       Black: {
//         selectVariantButton: "bg-[black]",
//       },
//       Brown: {
//         selectVariantButton: "bg-[brown]",
//       },
//       Grey: {
//         selectVariantButton: "bg-[grey]",
//       },
//       Navy: {
//         selectVariantButton: "bg-[navy]",
//       },
//     },
//   },
// ];

const BEST_SELLERS_COLLECTION_HANDLE = "best-sellers";
export default async function BestSellers() {
  const products = await getCollectionProducts({ collection: BEST_SELLERS_COLLECTION_HANDLE });

  return (
    <section className="px-5 md:px-8 lg:px-12 pb-12 md:pb-16 lg:pb-20">
      <header className="flex flex-col gap-4 lg:flex-row justify-between lg:items-end mb-8 md:mb-12">
        <h2 className="text-[2rem] md:text-[2.5rem] font-bold">Best sellers</h2>
        <Link href="#" className="flex gap-3 items-center">
          <span className="text-sm md:text-base">View all</span>
          <span className="grid place-items-center w-6 h-6 rounded-full bg-text/10">
            <ArrowRight />
          </span>
        </Link>
      </header>

      <ul className="flex overflow-auto gap-6 no-scrollbar snap-x snap-mandatory">
        {products.map((product) => (
          <BestSellerItem key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
}
