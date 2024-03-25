"use client";

import AddToCart from "@/components/cart/add_to_cart";
import MinusIcon from "@/components/icons/minus_icon";
import PlusIcon from "@/components/icons/plus_icon";
import Share from "@/components/icons/share";
import { getVariantOption } from "@/lib";
import { BLUR_DATA_URL, SHOPIFY_COLOR_OPTION_T0_CSS_BACKGROUND } from "@/lib/constants";
import { Product } from "@/types/shopify";
import clsx from "clsx";
import Image from "next/image";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  product: Product;
};
export default function FeaturedProduct({ product }: Props) {
  const [currentVariantIndex, setcurrentVariantIndex] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);

  const { variants, vendor, title, availableForSale } = product;

  const currentVariant = variants[currentVariantIndex];

  const handleDecreaseProductQuantity = () => {
    if (productQuantity <= 1) return;

    setProductQuantity((state) => state - 1);
  };

  const handleIncreaseProductQuantity = () => {
    setProductQuantity((state) => state + 1);
  };

  return (
    <section className="md:mx-8 lg:mx-12 md:mb-16 lg:mb-20 lg:p-12 lg:grid lg:grid-cols-[11fr_9fr] gap-12 md:rounded-3xl bg-white">
      <FeaturedProductImages product={product} />

      <div className="px-5 pb-12 md:px-12 lg:p-0 mt-5 lg:mt-0">
        <p className="opacity-70 text-sm md:text-base">{vendor}</p>

        <h2 className="my-2 md:my-4 font-bold text-[2rem] md:text-[2.5rem] leading-[1.1]">
          {title}
        </h2>

        <div className="flex justify-between gap-2 items-center">
          <p className="text-lg md:text-xl flex gap-1">
            <span>{currentVariant.price.currencyCode}</span>
            <span>{currentVariant.price.amount}</span>
          </p>
        </div>

        <hr className="my-6" />
        {variants.length > 1 && (
          <>
            <div className="mb-2">
              <p className="flex gap-2 text-sm md:text-base">
                <span className="text-text/70">Color:</span>
                <span>{currentVariant?.title}</span>
              </p>
            </div>

            <div className="mb-6 flex gap-1 items-center">
              {variants.map((variant, index) => {
                const colorOption = getVariantOption(variant, "Color");
                if (!colorOption) return;

                return (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => setcurrentVariantIndex(index)}
                    className={clsx(
                      "w-7 h-7 aspect-square rounded-full relative",
                      index === currentVariantIndex &&
                        "m-1 before:shadow-[0_0_0_2px] before:absolute before:-inset-[3px] before:rounded-full"
                    )}
                    style={{
                      background: SHOPIFY_COLOR_OPTION_T0_CSS_BACKGROUND.get(colorOption.value),
                    }}
                  >
                    <span className="sr-only">Select {variant.title}</span>
                  </button>
                );
              })}
            </div>
          </>
        )}

        <div className="py-6">
          <p className="mb-2 text-text/70">Quantity:</p>
          <div className="flex items-center h-[50px] rounded-button border border-text/10 w-fit">
            <button
              aria-label="Decrease product quantity"
              className={clsx("px-6 font-bold", productQuantity <= 1 && "opacity-50")}
              onClick={handleDecreaseProductQuantity}
              aria-disabled={productQuantity <= 1}
              disabled={productQuantity <= 1}
            >
              <MinusIcon />
            </button>
            <p>{productQuantity}</p>
            <button
              aria-label="Increase product quantity"
              className="px-6 font-bold"
              onClick={handleIncreaseProductQuantity}
            >
              <PlusIcon />
            </button>
          </div>
        </div>

        <AddToCart
          availableForSale={availableForSale}
          selectedVariantID={currentVariant.id}
          quantity={productQuantity}
          variants={variants}
        />

        <p className="p-5 flex flex-col gap-2 text-xs md:text-sm text-center bg-[rgb(240_240_240)] rounded-md my-6">
          <span className="font-bold">Fast shipping</span>
          <span>Place your order before 12:00pm and receive it by tomorrow</span>
        </p>

        <button type="button" className="opacity-70 mt-6 flex hover:opacity-100 gap-2.5">
          <Share />
          <span className="text-sm md:text-base">Share</span>
        </button>
      </div>
    </section>
  );
}

type FeaturedProductImagesProps = {
  product: Product;
};
function FeaturedProductImages({ product }: FeaturedProductImagesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesRef = useRef<Array<HTMLDivElement | null>>([]);

  const { images } = product;

  const handleImageButtonClick = (index: number) => {
    imagesRef.current[index]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative flex flex-col xl:flex-row gap-12 h-fit">
      {/* THumbnails button for product images,, shows on desktop */}
      <div className="order-1 xl:order-none lg:flex xl:flex-col gap-2.5 shrink-0 hidden">
        {images.map((image, index) => (
          <button
            key={image.url}
            onClick={() => handleImageButtonClick(index)}
            className={twMerge(
              "relative after:block after:w-full after:h-0.5 after:bg-black after:mt-1 after:opacity-0",
              index === currentImageIndex && "after:opacity-100"
            )}
          >
            <Image
              src={image.url}
              width={64}
              height={64}
              alt={image.altText}
              blurDataURL={BLUR_DATA_URL}
              placeholder="blur"
              className="rounded-md"
            />
          </button>
        ))}
      </div>

      <div className="relative w-full">
        <div className="flex gap-0.5 overflow-x-auto no-scrollbar snap-x snap-mandatory">
          {images.map((image, index) => (
            <div
              key={image.url}
              className={clsx(
                "aspect-square w-full shrink-0 relative lg:rounded-xl overflow-hidden snap-center snap-always"
              )}
              ref={(ref) => (imagesRef.current[index] = ref)}
            >
              <Image
                src={image.url}
                alt={image.altText}
                fill
                blurDataURL={BLUR_DATA_URL}
                placeholder="blur"
              />
            </div>
          ))}
        </div>

        {/* Dot buttons for product images, shows on mobile */}
        <div className="absolute bottom-4 left-0 right-0 z-10 py-2 px-4 mx-auto w-fit order-1 lg:-order-none flex rounded-full bg-white/70 gap-2.5 lg:hidden">
          {images.map((image, index) => (
            <button
              key={image.url}
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
