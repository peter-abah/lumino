"use client";

import clsx from "clsx";
import Link from "next/link";
import { useContext, useState } from "react";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";
import { NavBarStickyContext, NavBarStickyContextType } from "../contexts/nav_bar_sticky_context";

const HERO_SLIDES = [
  {
    title: "High-Performance & Elegant Design",
    subtitle: "Introducing the MW08 sport",
    cta: "Shop the MW08 Sport",
    ctaLink: "#",
    stylesClasses: {
      containerBg: "bg-hero-mw08",
      innerBg: "bg-hero-inner-mw08",
      cta: "bg-white text-text",
    },
  },
  {
    title: "Premium Audio Products",
    subtitle: "High-end earphones",
    cta: "Discover collection",
    ctaLink: "#",
    stylesClasses: {
      containerBg: "bg-hero-earphones",
      innerBg: "bg-hero-inner-earphones",
      cta: "bg-white text-text",
    },
  },
  {
    title: "High-Performance Sound Tools",
    subtitle: "High-end headphones",
    cta: "Discover collection",
    ctaLink: "#",
    stylesClasses: {
      containerBg: "bg-hero-headphones",
      innerBg: "bg-hero-inner-headphones",
      cta: "bg-hero-headphones-cta text-white",
    },
  },
];

// TODO: Make this accessible
export default function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const { setIsNavBarSticky } = useContext(NavBarStickyContext) as NavBarStickyContextType;

  // TODO: Document this, explain what is happening and move it to a custom hook
  const { ref: showStickyNavRef } = useInView({
    onChange: (inView) => {
      if (!inView) {
        setIsNavBarSticky(true);
      }
    },
  });
  const { ref: hideStickyNavRef } = useInView({
    onChange: (inView) => {
      if (inView) {
        setIsNavBarSticky(false);
      }
    },
  });
  const onSlideButtonClick = (slideIndex: number) => {
    setCurrentSlideIndex(slideIndex);
  };

  return (
    // TODO: Move arbitary values to tailwind config
    <div className="relative">
      {HERO_SLIDES.map((slide, slideIndex) => (
        <section
          key={slide.title}
          className={clsx("pt-24 px-12 pb-16 text-white", slide.stylesClasses.containerBg, {
            hidden: slideIndex !== currentSlideIndex,
          })}
        >
          <div
            className={clsx(
              "relative flex h-[560px] rounded-xl  items-center",
              slide.stylesClasses.innerBg
            )}
          >
            <div className="max-w-[40rem] ml-24">
              <p className="font-bold">{slide.subtitle}</p>
              <h1 className="my-8 text-5xl font-bold">{slide.title}</h1>
              <Link
                className={clsx(
                  "inline-block rounded-button px-10 py-4 font-bold",
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

      {/* Observe when element comes into view to show nav bar */}
      <div
        className="absolute bottom-[40%] h-4 bg-transparent"
        aria-hidden
        ref={showStickyNavRef}
      ></div>
      {/* Observe when element comes into view to show nav bar */}
      <div className="absolute top-0 h-4 bg-transparent" aria-hidden ref={hideStickyNavRef}></div>
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
            "w-7 h-7 rounded-full border-2 border-white/50 text-white/50 grid place-items-center",
            i === currentSlideIndex && "border-white text-white"
          )}
        >
          {i + 1}
        </button>
      );
    }
    return buttons;
  };
  return <div className="absolute bottom-12 right-12 gap-2 flex">{createButtons()}</div>;
}
