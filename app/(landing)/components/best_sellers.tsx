import Link from "next/link";
import BestSellerItem from "./best_seller_item";
import { BestSellerItem as TBestSellerItem } from "@/app/types/definition";

const BEST_SELLER_ITEMS: TBestSellerItem[] = [
  {
    name: "MH40 Wireless (Silver Metal / Navy Coated Canvas)",
    rating: "4.6",
    price: 299,
    variants: ["Silver Metal / Navy Coated Canvas"],
    images: {
      "Silver Metal / Navy Coated Canvas": {
        normal: "/images/mh40.png",
        onHover: "/images/mh40-hover.png",
      },
    },
    link: "#",
    styles: {
      "Silver Metal / Navy Coated Canvas": {
        selectVariantButton: "bg-[linear-gradient(135deg,black_50%,lightgrey_50%)]",
      },
    },
  },
  {
    name: "MW08 Sport (Green Sapphire Glass / Black Kevlar® Case)",
    rating: "4.8",
    price: 348,
    variants: ["Green Sapphire Glass / Black Kevlar® Case"],
    images: {
      "Green Sapphire Glass / Black Kevlar® Case": {
        normal: "/images/mw08.png",
        onHover: "/images/mw08-hover.png",
      },
    },
    link: "#",
    styles: {
      "Green Sapphire Glass / Black Kevlar® Case": {
        selectVariantButton: "bg-[linear-gradient(90deg,darkgreen,black)]",
      },
    },
  },
  {
    name: "MH40 Wireless (Silver Metal / Navy Coated Canvas)",
    rating: "4.6",
    price: 299,
    variants: ["Silver Metal / Navy Coated Canvas"],
    images: {
      "Silver Metal / Navy Coated Canvas": {
        normal: "/images/mh40.png",
        onHover: "/images/mh40-hover.png",
      },
    },
    link: "#",
    styles: {
      "Silver Metal / Navy Coated Canvas": {
        selectVariantButton: "bg-[linear-gradient(135deg,black_50%,lightgrey_50%)]",
      },
    },
  },
  {
    name: "MW08 Sport (Green Sapphire Glass / Black Kevlar® Case)",
    rating: "4.8",
    price: 348,
    variants: ["Green Sapphire Glass / Black Kevlar® Case"],
    images: {
      "Green Sapphire Glass / Black Kevlar® Case": {
        normal: "/images/mw08.png",
        onHover: "/images/mw08-hover.png",
      },
    },
    link: "#",
    styles: {
      "Green Sapphire Glass / Black Kevlar® Case": {
        selectVariantButton: "bg-[linear-gradient(135deg,black_50%,lightgrey_50%)]",
      },
    },
  },
  {
    name: "MH40 Wireless (Silver Metal / Navy Coated Canvas)",
    rating: "4.6",
    price: 299,
    variants: ["Silver Metal / Navy Coated Canvas"],
    images: {
      "Silver Metal / Navy Coated Canvas": {
        normal: "/images/mh40.png",
        onHover: "/images/mh40-hover.png",
      },
    },
    link: "#",
    styles: {
      "Silver Metal / Navy Coated Canvas": {
        selectVariantButton: "bg-[linear-gradient(135deg,black_50%,lightgrey_50%)]",
      },
    },
  },
  {
    name: "MH40 Wireless Ear Pads",
    rating: "4.5",
    price: 49,
    variants: ["Black", "Brown", "Grey", "Navy"],
    images: {
      Black: {
        normal: "/images/mh40-pads-black.jpg",
        onHover: "/images/mh40-pads-brown.jpg",
      },
      Brown: {
        normal: "/images/mh40-pads-brown.jpg",
        onHover: "/images/mh40-pads-gray.png",
      },
      Grey: {
        normal: "/images/mh40-pads-gray.png",
        onHover: "/images/mh40-pads-navy.jpg",
      },
      Navy: {
        normal: "/images/mh40-pads-navy.jpg",
        onHover: "/images/mh40-pads-brown.jpg",
      },
    },
    link: "#",
    styles: {
      Black: {
        selectVariantButton: "bg-[black]",
      },
      Brown: {
        selectVariantButton: "bg-[brown]",
      },
      Grey: {
        selectVariantButton: "bg-[grey]",
      },
      Navy: {
        selectVariantButton: "bg-[navy]",
      },
    },
  },
];

export default function BestSellers() {
  return (
    <section className="px-12 pb-20">
      <header className="flex justify-between items-end mb-12">
        <h2 className="text-[2.5rem] font-bold">Best sellers</h2> <Link href="#">View all</Link>
      </header>

      <ul className="flex overflow-auto gap-6 no-scrollbar snap-x snap-mandatory">
        {BEST_SELLER_ITEMS.map((bestSellerItem) => (
          <BestSellerItem key={bestSellerItem.name} item={bestSellerItem} />
        ))}
      </ul>
    </section>
  );
}
