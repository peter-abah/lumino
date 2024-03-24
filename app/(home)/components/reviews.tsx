"use client";

import ArrowRightIcon from "@/components/icons/arrow_right_icon";
import { BLUR_DATA_URL } from "@/lib/constants";
import useSlideShow from "@/lib/hooks/use_slide_show";
import { urlForImage } from "@/sanity/lib/image";
import { Quote, SanityArray } from "@/types/sanity";
import clsx from "clsx";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type Props = {
  data: SanityArray<Quote>;
};
export default function Reviews({ data }: Props) {
  const { currentIndex, setCurrentIndex, goToNext, goToPrev } = useSlideShow(data.length);

  return (
    <section className="px-5 md:px-8 lg:px-12 pb-12 md:pb-16 lg:pb-20 mx-auto">
      <ul id="reviews-list">
        {data.map((review, index) => (
          <li
            key={review._key}
            className={clsx(
              "text-center max-w-[62.5rem] md:px-8 mx-auto",
              index !== currentIndex && "hidden"
            )}
            aria-label={`Review ${index + 1} of ${data.length}`}
          >
            <blockquote className="text-2xl md:text-[2rem] leading-tight font-bold mb-8 md:mb-10">
              {review.quote}
            </blockquote>
            <div className="relative max-w-[6.25rem] h-10 mx-auto">
              <Image
                src={urlForImage(review.logo)}
                alt={review.logo.alt || ""}
                fill
                blurDataURL={BLUR_DATA_URL}
                placeholder="blur"
                className="object-contain object-center"
              />
            </div>
          </li>
        ))}
      </ul>
      <ul className="flex gap-5 items-center mx-auto w-fit mt-10">
        <li>
          <button
            type="button"
            onClick={goToPrev}
            aria-controls="reviews-list"
            className="w-12 h-12 rounded-full border grid place-items-center group hover:bg-text/5 transition-all duration-300"
          >
            <ArrowRightIcon className="w-2 h-auto rotate-180 group-hover:scale-110" />
            <span className="sr-only">Previous review</span>
          </button>
        </li>

        <ul className="flex gap-x-4 items-center">
          {data.map((_, index) => (
            <li key={index} className="flex">
              <button
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={twMerge(
                  "w-1.5 h-1.5 bg-text/30 rounded-full",
                  index === currentIndex && "bg-text"
                )}
              >
                <span className="sr-only">Go to review {index + 1}</span>
              </button>
            </li>
          ))}
        </ul>

        <li>
          <button
            type="button"
            onClick={goToNext}
            className="w-12 h-12 rounded-full border grid place-items-center group hover:bg-text/5 transition-all duration-300"
            aria-controls="reviews-list"
          >
            <ArrowRightIcon className="w-2 h-auto group-hover:scale-110" />
            <span className="sr-only">Next review</span>
          </button>
        </li>
      </ul>
    </section>
  );
}
