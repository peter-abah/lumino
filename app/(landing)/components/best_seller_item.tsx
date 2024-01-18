"use client";

import Image from "next/image";
import { useState } from "react";
import { type BestSellerItem } from "@/app/types/definition";
import clsx from "clsx";
import Link from "next/link";
import StarIcon from "@/app/components/icons/star";

type BestSellerItemProps = {
  item: BestSellerItem;
};
export default function BestSellerItem({ item }: BestSellerItemProps) {
  const [currentVariant, setCurrentVariant] = useState(item.variants[0]);
  return (
    <li className="bg-white snap-start rounded-md">
      <Link
        href={item.link}
        className="w-[72vw] md:w-[36vw] lg:w-[20vw] rounded-md overflow-hidden inline-block relative aspect-square group"
      >
        <Image
          src={item.images[currentVariant].normal}
          fill
          alt={item.name}
          className="group-hover:opacity-0 transition-opacity"
        />
        <Image
          src={item.images[currentVariant].onHover}
          fill
          alt={item.name}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden
        />
      </Link>
      <div className="p-5 flex flex-col gap-0.5">
        <div className="flex gap-2 justify-between">
          <Link href={item.link} className="font-bold">
            {item.name}
          </Link>
          <p className="flex gap-1.5 h-fit">
            <span className="text-sm leading-6">{item.rating}</span>
            <StarIcon className="text-star" />
          </p>
        </div>
        <p className="text-text/70">${item.price}</p>
        <div className="flex items-center gap-1 mt-1">
          {item.variants.map((variant) => (
            <button
              type="button"
              key={variant}
              onClick={() => setCurrentVariant(variant)}
              className={clsx(
                "w-3.5 h-3.5 aspect-square rounded-full relative",
                item.styles[variant].selectVariantButton,
                currentVariant === variant &&
                  "m-1 before:shadow-[0_0_0_2px] before:absolute before:-inset-0.5 before:rounded-full"
              )}
            >
              <span className="sr-only">{variant}</span>
            </button>
          ))}
        </div>
      </div>
    </li>
  );
}
