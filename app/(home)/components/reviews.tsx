"use client";

import ArrowRightIcon from "@/components/icons/arrow_right_icon";
import useSlideShow from "@/hooks/use_slide_show";
import { urlForImage } from "@/sanity/lib/image";
import { Quote, SanityArray } from "@/types/sanity";
import clsx from "clsx";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

// const REVIEWS = [
//   {
//     text: "Master & Dynamic is known for providing a first-class audio listening experience with the most stylish, unexpected designs.",
//     reviewer: "Men's health",
//     reviewerImage: "/images/mens-health.png",
//   },
//   {
//     text: "If you’re the sort of person who takes their sport seriously and loves to own beautiful objects, the Master & Dynamic MW08 Sport were made for you",
//     reviewer: "Forbes",
//     reviewerImage: "/images/forbes.png",
//   },
//   {
//     text: "The design is spectacular, the fit is precise, the ANC is industry-leading, the battery life is fantastic, and the audio is clear and powerful",
//     reviewer: "LUXE DIGITAL",
//     reviewerImage: "/images/luxe-digital.png",
//   },
// ];

type Props = {
  data: SanityArray<Quote>;
};
export default function Reviews({ data }: Props) {
  const { currentIndex, setCurrentIndex, goToNext, goToPrev } = useSlideShow(data.length);

  return (
    <section className="px-5 md:px-8 lg:px-12 pb-12 md:pb-16 lg:pb-20 mx-auto">
      <ul>
        {data.map((review, index) => (
          <li
            key={review._key}
            className={clsx(
              "text-center max-w-[62.5rem] md:px-8 mx-auto",
              index !== currentIndex && "hidden"
            )}
          >
            <blockquote className="text-2xl md:text-[2rem] leading-tight font-bold mb-8 md:mb-10">
              {review.quote}
            </blockquote>
            <div className="relative max-w-[6.25rem] h-10 mx-auto">
              <Image
                src={urlForImage(review.logo)}
                alt={review.logo.alt || ""}
                fill
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
          >
            <ArrowRightIcon className="w-2 h-auto group-hover:scale-110" />
            <span className="sr-only">Next review</span>
          </button>
        </li>
      </ul>
    </section>
  );
}
