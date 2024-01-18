"use client";

import Share from "@/app/components/icons/share";
import StarIcon from "@/app/components/icons/star";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
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
    <section className="md:mx-8 lg:mx-12 md:mb-16 lg:mb-20 lg:p-12 min-[950px]:grid min-[950px]:grid-cols-[11fr_9fr] gap-12 md:rounded-3xl bg-white">
      <FeaturedProductImages product={FEATURED_PRODUCT} />

      <div className="px-5 pb-12 md:px-12 lg:p-0 mt-5 lg:mt-0">
        <Link href={FEATURED_PRODUCT.vendor.link} className="opacity-70 text-sm md:text-base">
          {FEATURED_PRODUCT.vendor.name}
        </Link>
        <h2 className="my-2 md:my-4 font-bold text-[2rem] md:text-[2.5rem] leading-[1.1]">
          <Link href={FEATURED_PRODUCT.link}>{FEATURED_PRODUCT.name}</Link>
        </h2>
        <div className="flex justify-between gap-2 items-center">
          <p className="text-lg md:text-xl">$ {FEATURED_PRODUCT.price}</p>
          <span className="text-sm flex gap-1.5 h-fit">
            <span className="leading-none">{FEATURED_PRODUCT.rating}</span>
            <StarIcon className="w-3 text-star" />
          </span>
        </div>

        <hr className="my-6" />
        <div className="mb-2">
          {FEATURED_PRODUCT.colors.map((color) => (
            <p key={color} className="flex gap-2 text-sm md:text-base">
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

        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <button
            type="button"
            className="px-8 md:px-10 py-4 md:py-4.5 rounded-button bg-[rgb(137_49_15)] grid place-items-center text-white w-full font-bold text-sm md:text-base"
          >
            Add to cart
          </button>
          <button
            type="button"
            className="px-8 md:px-10 py-4 md:py-4.5 rounded-button bg-black grid place-items-center text-white w-full font-bold text-sm md:text-base"
          >
            Buy it now
          </button>
        </div>

        <p className="p-5 flex flex-col gap-2 text-xs md:text-sm text-center bg-[rgb(240_240_240)] rounded-md my-6">
          <span className="font-bold">Fast shipping</span>
          <span>Place your order before 12:00pm and receive it by tomorrow</span>
        </p>

        <Link
          href={FEATURED_PRODUCT.link}
          className="underline hover:no-underline text-sm md:text-base"
        >
          View full details
        </Link>

        <button type="button" className="opacity-70 mt-6 flex hover:opacity-100 gap-2.5">
          <Share />
          <span className="text-sm md:text-base">Share</span>
        </button>
      </div>
    </section>
  );
}

type FeaturedProductImagesProps = {
  product: typeof FEATURED_PRODUCT;
};
function FeaturedProductImages({ product }: FeaturedProductImagesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesRef = useRef<Array<HTMLDivElement | null>>([]);

  const handleImageButtonClick = (index: number) => {
    imagesRef.current[index]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative flex flex-col min-[1200px]:flex-row gap-12 h-fit">
      {/* THumbnails button for product images,, shows on desktop */}
      <div className="order-1 min-[1200px]:order-none lg:flex min-[1200px]:flex-col gap-2.5 shrink-0 hidden">
        {product.images.map((image, index) => (
          <button
            key={image}
            onClick={() => handleImageButtonClick(index)}
            className={twMerge(
              "relative after:block after:w-full after:h-0.5 after:bg-black after:mt-1 after:opacity-0",
              index === currentImageIndex && "after:opacity-100"
            )}
          >
            <Image src={image} width={64} height={64} alt={product.name} className="rounded-md" />
          </button>
        ))}
      </div>

      <div className="relative w-full">
        <div className="flex gap-0.5 overflow-x-auto no-scrollbar snap-x snap-mandatory">
          {product.images.map((image, index) => (
            <div
              key={image}
              className={clsx(
                "aspect-square w-full shrink-0 relative lg:rounded-xl overflow-hidden snap-center snap-always"
              )}
              ref={(ref) => (imagesRef.current[index] = ref)}
            >
              <Image src={image} alt={product.name} fill />
            </div>
          ))}
        </div>

        {/* Dot buttons for product images, shows on mobile */}
        <div className="absolute bottom-4 left-0 right-0 z-10 py-2 px-4 mx-auto w-fit order-1 lg:-order-none flex rounded-full bg-white/70 gap-2.5 lg:hidden">
          {product.images.map((image, index) => (
            <button
              key={image}
              onClick={() => handleImageButtonClick(index)}
              className={twMerge(
                "w-1.5 aspect-square bg-current opacity-30 rounded-full",
                index === currentImageIndex && "opacity-100"
              )}
            >
              <span className="sr-only">Go to product image {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
