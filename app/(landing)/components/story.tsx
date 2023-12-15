"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import ArrowLeftIcon from "@/app/components/icons/arrow_left_icon";

const STORIES = [
  {
    text: "Master & Dynamic launches in NYC with a core collection of premium on, over and in-ear headphones.",
    year: 2014,
    image: "/images/story-2014.jpg",
  },
  {
    text: "Master & Dynamic partners with renowned architect Sir David Adjaye to launch a new concrete wireless speaker for the home.",
    year: 2017,
    image: "/images/story-2017.jpg",
  },
  {
    text: "We introduce the MW07 True Wireless Earphones, built on cutting-edge technology and crafted with premium materials.",
    year: 2018,
    image: "/images/story-2018.jpg",
  },
  {
    text: "Master & Dynamic partners with Automobili Lamborghini on a collection of high-performance sound tools.",
    year: 2019,
    image: "/images/story-2019.jpg",
  },
  {
    text: "Master & Dynamic partners with the iconic football club Paris Saint-Germain to create a limited-edition collection of sound tools",
    year: 2020,
    image: "/images/story-2020.jpg",
  },
  {
    text: "Master & Dynamic partners with Leica Camera AG to introduce the MH40 Wireless Headphones to the 0.95 capsule collection.",
    year: 2021,
    image: "/images/story-2021.jpg",
  },
];

export default function Stories() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const goToNextStory = () => {
    setCurrentStoryIndex((prev) => (prev === STORIES.length - 1 ? 0 : prev + 1));
  };

  const goToPreviousStory = () => {
    setCurrentStoryIndex((prev) => (prev === 0 ? STORIES.length - 1 : prev - 1));
  };

  return (
    <section className="px-12 py-20">
      {STORIES.map((story, index) => (
        <div
          key={story.year}
          className={clsx("grid grid-cols-2", index !== currentStoryIndex && "hidden")}
        >
          <div className="relative mr-[16.5%] aspect-square rounded-xl overflow-hidden">
            <Image src={story.image} fill alt="" />
          </div>

          <div className="mr-[16.5%]">
            <p className="font-bold">Story</p>
            <p className="mt-6 text-[2.5rem] leading-heading font-bold">{story.text}</p>
          </div>
        </div>
      ))}

      <div className="mt-14 flex gap-10 items-start">
        <div className="relative flex w-full">
          <span className="absolute w-full bg-text/10 h-0.5 top-2.5  left-0"></span>
          {STORIES.map((story, index) => (
            <button
              key={story.year}
              onClick={() => setCurrentStoryIndex(index)}
              className={twMerge(
                "z-10 flex flex-col gap-3 w-full text-left font-bold before:w-5 before:aspect-square before:border-2 before:rounded-full before:box-border before:bg-main-bg",
                index === currentStoryIndex && "before:bg-black before:border-black"
              )}
            >
              <span
                className={twMerge(
                  "font-bold text-sm opacity-50",
                  index === currentStoryIndex && "opacity-100"
                )}
              >
                {story.year}
              </span>
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={goToPreviousStory}
            className="w-12 h-12 rounded-full border grid place-items-center group hover:bg-text/5 transition-all duration-300"
          >
            <ArrowLeftIcon className="w-2 h-auto rotate-180 group-hover:scale-110" />
            <span className="sr-only">Previous review</span>
          </button>

          <button
            type="button"
            onClick={goToNextStory}
            className="w-12 h-12 rounded-full border grid place-items-center group hover:bg-text/5 transition-all duration-300"
          >
            <ArrowLeftIcon className="w-2 h-auto group-hover:scale-110" />
            <span className="sr-only">Previous review</span>
          </button>
        </div>
      </div>
    </section>
  );
}
