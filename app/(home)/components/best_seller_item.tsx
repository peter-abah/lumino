"use client";

import { SHOPIFY_COLOR_OPTION_T0_CSS_BACKGROUND } from "@/lib/constants";
import { Product, ProductVariant } from "@/types/shopify";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type BestSellerItemProps = {
  product: Product;
};
export default function BestSellerItem({ product }: BestSellerItemProps) {
  const [currentVariant, setCurrentVariant] = useState<ProductVariant>(product.variants[0]);

  return (
    <li className="bg-white snap-start rounded-md">
      <Link
        href={`products/${product.handle}`}
        className="w-[72vw] md:w-[36vw] lg:w-[20vw] rounded-md overflow-hidden inline-block relative aspect-square group"
      >
        <Image
          src={currentVariant.image?.url || product.featuredImage.url}
          fill
          alt={currentVariant.image?.altText || product.featuredImage.altText}
          className="group-hover:scale-105 duration-[1s]"
        />
      </Link>

      <div className="p-5 flex flex-col gap-0.5">
        <div className="flex gap-2 justify-between">
          <Link href={`products/${product.handle}`} className="font-bold">
            {product.title}
          </Link>
        </div>
        <p className="text-text/70 flex gap-1">
          <span>{currentVariant.price.currencyCode}</span>
          <span>{currentVariant.price.amount}</span>
        </p>

        <div className="flex items-center gap-1 mt-1">
          {product.variants.map((variant) => (
            <button
              type="button"
              key={variant.id}
              onClick={() => setCurrentVariant(variant)}
              className={clsx(
                "w-3.5 h-3.5 aspect-square rounded-full relative",
                currentVariant.id === variant.id &&
                  "m-1 before:shadow-[0_0_0_2px] before:absolute before:-inset-0.5 before:rounded-full"
              )}
              style={{
                background: SHOPIFY_COLOR_OPTION_T0_CSS_BACKGROUND.get(
                  variant.selectedOptions.find(({ name }) => name === "Color")?.value || ""
                ),
              }}
            >
              <span className="sr-only">{variant.title}</span>
            </button>
          ))}
        </div>
      </div>
    </li>
  );
}
