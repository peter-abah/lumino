"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const FEATURED_PRODUCT = {
  name: "MW07 Plus (Tortoiseshell / Stainless Steel Case)",
  vendor: { name: "Master & Dynamic", link: "#" },
  price: "249.00",
  images: [
    "/images/mw07-featured-1.png",
    "/images/mw07-featured-2.png",
    "/images/mw07-featured-3.png",
    "/images/mw07-featured-4.png",
    "/images/mw07-featured-5.png",
    "/images/mw07-featured-6.png",
  ],
  colors: ["Tortoiseshell / Stainless Steel Case"],
  link: "#",
  rating: "4.5",
  styles: {
    selectColorButton: {
      "Tortoiseshell / Stainless Steel Case": "bg-[linear-gradient(120deg,black_20%,red)]",
    } as Record<string, string>,
  },
};

export default function FeaturedProduct() {
  const [currentColor, setCurrentColor] = useState(FEATURED_PRODUCT.colors[0]);

  return (
    <section className="mx-12 mb-20 p-12 grid grid-cols-[11fr_9fr] gap-12 rounded-3xl bg-white">
      <FeaturedProductImages product={FEATURED_PRODUCT} />

      <div>
        <Link href={FEATURED_PRODUCT.vendor.link} className="opacity-70">
          {FEATURED_PRODUCT.vendor.name}
        </Link>
        <h2 className="my-4 font-bold text-[40px]">
          <Link href={FEATURED_PRODUCT.link}>{FEATURED_PRODUCT.name}</Link>
        </h2>
        <div className="flex justify-between gap-2">
          <p className="text-xl">{FEATURED_PRODUCT.price}</p>
          <span className="text-sm">{FEATURED_PRODUCT.rating}</span>
        </div>

        <hr className="my-6" />
        <div className="mb-2">
          {FEATURED_PRODUCT.colors.map((color) => (
            <p key={color} className="flex gap-2">
              <span className="text-text/70">Color:</span>
              <span>{color}</span>
            </p>
          ))}
        </div>

        <div className="mb-6">
          {FEATURED_PRODUCT.colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => setCurrentColor(color)}
              className={clsx(
                "w-7 h-7 aspect-square rounded-full relative",
                FEATURED_PRODUCT.styles.selectColorButton[color],
                currentColor === color &&
                  "m-1 before:shadow-[0_0_0_2px] before:absolute before:-inset-[3px] before:rounded-full"
              )}
            >
              <span className="sr-only">Select {FEATURED_PRODUCT.colors}</span>
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            className="px-10 py-4.5 rounded-button bg-[rgb(137_49_15)] grid place-items-center text-white w-full font-bold"
          >
            Add to cart
          </button>
          <button
            type="button"
            className="px-10 py-4.5 rounded-button bg-black grid place-items-center text-white w-full font-bold"
          >
            Buy it now
          </button>
        </div>

        <p className="p-5 flex flex-col gap-2 text-sm text-center bg-[rgb(240_240_240)] rounded-md my-6">
          <span className="font-bold">Fast shipping</span>
          <span>Place your order before 12:00pm and receive it by tomorrow</span>
        </p>

        <Link href={FEATURED_PRODUCT.link} className="underline hover:no-underline">
          View full details
        </Link>

        <button type="button" className="opacity-70 mt-6 block hover:opacity-100">
          Share
        </button>
      </div>
    </section>
  );
}

type FeaturedProductImagesProps = {
  product: typeof FEATURED_PRODUCT;
};
function FeaturedProductImages({ product }: FeaturedProductImagesProps) {
  const [currentImage, setCurrentImage] = useState(product.images[0]);

  return (
    <div className="flex gap-12 h-fit">
      <div className="flex flex-col gap-2.5 shrink-0">
        {product.images.map((image) => (
          <button
            key={image}
            onClick={() => setCurrentImage(image)}
            className={twMerge(
              "relative after:block after:w-full after:h-0.5 after:bg-black after:mt-1 after:opacity-0",
              image === currentImage && "after:opacity-100"
            )}
          >
            <Image src={image} width={64} height={64} alt={product.name} className="rounded-md" />
          </button>
        ))}
      </div>

      {product.images.map((image) => (
        <div
          key={image}
          className={clsx(
            "aspect-square w-full relative rounded-xl overflow-hidden",
            image !== currentImage && "hidden"
          )}
        >
          <Image src={image} alt={product.name} fill />
        </div>
      ))}
    </div>
  );
}
