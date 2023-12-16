"use client";

import ArrowDownIcon from "@/app/components/icons/arrow_down_icon";
import ArrowRightIcon from "@/app/components/icons/arrow_right_icon";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const REVIEWS = [
  {
    text: "Master & Dynamic is known for providing a first-class audio listening experience with the most stylish, unexpected designs.",
    reviewer: "Men's health",
    reviewerImage: "/images/mens-health.png",
  },
  {
    text: "If you’re the sort of person who takes their sport seriously and loves to own beautiful objects, the Master & Dynamic MW08 Sport were made for you",
    reviewer: "Forbes",
    reviewerImage: "/images/forbes.png",
  },
  {
    text: "The design is spectacular, the fit is precise, the ANC is industry-leading, the battery life is fantastic, and the audio is clear and powerful",
    reviewer: "LUXE DIGITAL",
    reviewerImage: "/images/luxe-digital.png",
  },
];

export default function Reviews() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const goToPreviousReview = () => {
    setCurrentReviewIndex((prevState) => (prevState === 0 ? REVIEWS.length - 1 : prevState - 1));
  };
  const goToNextReview = () => {
    setCurrentReviewIndex((prevState) => (prevState + 1) % REVIEWS.length);
  };

  return (
    <section className="px-12 pb-20 mx-auto">
      <ul>
        {REVIEWS.map((review, index) => (
          <li
            key={review.text}
            className={clsx(
              "text-center max-w-[62.5rem] px-8 mx-auto",
              index !== currentReviewIndex && "hidden"
            )}
          >
            <blockquote className="text-4xl font-bold mb-10">{review.text}</blockquote>
            <div className="relative max-w-[6.25rem] h-10 mx-auto">
              <Image
                src={review.reviewerImage}
                alt={review.reviewer}
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
            onClick={goToPreviousReview}
            className="w-12 h-12 rounded-full border grid place-items-center group hover:bg-text/5 transition-all duration-300"
          >
            <ArrowRightIcon className="w-2 h-auto rotate-180 group-hover:scale-110" />
            <span className="sr-only">Previous review</span>
          </button>
        </li>

        <ul className="flex gap-x-4 items-center">
          {REVIEWS.map((_, index) => (
            <li key={index} className="flex">
              <button
                type="button"
                onClick={() => setCurrentReviewIndex(index)}
                className={twMerge(
                  "w-1.5 h-1.5 bg-text/30 rounded-full",
                  index === currentReviewIndex && "bg-text"
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
            onClick={goToNextReview}
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
