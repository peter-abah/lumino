"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const HERO_SLIDES = [
  {
    title: "High-Performance & Elegant Design",
    subtitle: "Introducing the MW08 sport",
    cta: "Shop the MW08 Sport",
    image: "/images/hero-mw08.jpg",
    ctaLink: "#",
    stylesClasses: {
      containerBg: "bg-hero-mw08",
      innerBg: "bg-hero-inner-mw08",
      cta: "bg-white text-text",
    },
    orientation: "LEFT",
  },
  {
    title: "Premium Audio Products",
    subtitle: "High-end earphones",
    cta: "Discover collection",
    ctaLink: "#",
    image: "/images/hero-earphones.jpg",
    stylesClasses: {
      containerBg: "bg-hero-earphones",
      innerBg: "bg-hero-inner-earphones",
      cta: "bg-white text-text",
    },
    orientation: "LEFT",
  },
  {
    title: "High-Performance Sound Tools",
    subtitle: "High-end headphones",
    cta: "Discover collection",
    ctaLink: "#",
    image: "/images/hero-headphones.jpg",
    stylesClasses: {
      containerBg: "bg-hero-headphones",
      innerBg: "bg-hero-inner-headphones",
      cta: "bg-hero-headphones-cta text-white",
    },
    orientation: "RIGHT",
  },
];

// TODO: Make this accessible
export default function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const onSlideButtonClick = (slideIndex: number) => {
    setCurrentSlideIndex(slideIndex);
  };

  return (
    // TODO: Move arbitary values to tailwind config
    <div className="relative">
      {HERO_SLIDES.map((slide, slideIndex) => (
        <section
          key={slide.title}
          className={clsx(
            "pt-16 lg:pt-24 px-5 md:px-8 lg:px-12 pb-10 md:pb-12 lg:pb-16 text-white",
            slide.stylesClasses.containerBg,
            {
              hidden: slideIndex !== currentSlideIndex,
            }
          )}
        >
          <div
            className={clsx(
              "relative flex h-[560px] rounded-xl items-center p-5 md:p-16 lg:p-24 overflow-hidden",
              slide.stylesClasses.innerBg
            )}
          >
            <Image src={slide.image} fill alt="" className="object-center object-cover" />
            <div
              className={clsx(
                "max-w-[40rem] z-10 flex flex-col",
                slide.orientation === "LEFT" && "items-start",
                slide.orientation === "RIGHT" && "ml-auto items-end"
              )}
            >
              <p className="font-bold text-sm lg:text-base">{slide.subtitle}</p>
              <h1 className="lg:my-8 mt-4 mb-6 lg:text-5xl text-[40px] leading-[1.1] font-bold">
                {slide.title}
              </h1>
              <Link
                className={clsx(
                  "inline-block w-fit rounded-button px-8 lg:px-10 py-4 text-sm lg:text-base font-bold hover:bg-opacity-80",
                  slide.stylesClasses.cta
                )}
                href={slide.ctaLink}
              >
                {slide.cta}
              </Link>
            </div>

            <SlidesButtons
              slidesNo={HERO_SLIDES.length}
              onButtonClick={onSlideButtonClick}
              currentSlideIndex={currentSlideIndex}
            />
          </div>
        </section>
      ))}
    </div>
  );
}

type SlideButtonsProps = {
  slidesNo: number;
  currentSlideIndex: number;
  onButtonClick: (slideIndex: number) => void;
};
function SlidesButtons({ slidesNo, currentSlideIndex, onButtonClick }: SlideButtonsProps) {
  const createButtons = () => {
    const buttons = [];
    for (let i = 0; i < slidesNo; i++) {
      buttons.push(
        <button
          key={i}
          type="button"
          onClick={() => onButtonClick(i)}
          className={twMerge(
            "w-7.5 h-7.5 rounded-full border-2 border-white/50 text-white/50 grid place-items-center font-bold",
            i === currentSlideIndex && "border-white text-white"
          )}
        >
          {i + 1}
        </button>
      );
    }
    return buttons;
  };
  return (
    <div className="absolute bottom-5 right-5 md:right-8 md:bottom-8 lg:bottom-12 lg:right-12 gap-2 flex">
      {createButtons()}
    </div>
  );
}
