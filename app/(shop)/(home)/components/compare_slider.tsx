"use client";

import { CSSProperties, ReactNode, useCallback, useEffect, useRef, useState } from "react";

type Props = {
  item1: ReactNode;
  item2: ReactNode;
};

export default function CompareSlider({ item1, item2 }: Props) {
  const [isSliding, setIsSliding] = useState(false);
  const [leftItemStyle, setLeftItemStyle] = useState<CSSProperties>({
    clipPath: "inset(0 50% 0 0)",
  });
  const handleRef = useRef<HTMLButtonElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  // Set position of handle and resize images
  const setPositioning = useCallback((xPosition: number) => {
    if (!parentRef.current || !handleRef.current) return;

    const { left: parentLeft, width: parentWidth } = parentRef.current.getBoundingClientRect();

    if (xPosition >= parentLeft && xPosition <= parentWidth + parentLeft) {
      handleRef.current.style.left = `${((xPosition - parentLeft) / parentWidth) * 100}%`;
      setLeftItemStyle({
        clipPath: `inset(0 ${100 - ((xPosition - parentLeft) / parentWidth) * 100}% 0 0)`,
      });
    }
  }, []);

  const handleSlide = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (e instanceof MouseEvent) {
        setPositioning(e.clientX);
      } else if (e.touches && e.touches[0].clientX) {
        setPositioning(e.touches[0].clientX);
      }
    },
    [setPositioning]
  );

  const handleSlideEnd = useCallback(() => {
    setIsSliding(false);
    window.removeEventListener("mousemove", handleSlide);
    window.removeEventListener("mouseup", handleSlideEnd);
    window.removeEventListener("touchstart", handleSlide);
    window.removeEventListener("touchend", handleSlideEnd);
  }, [handleSlide]);

  const handleSlideForKeyboard = useCallback(
    (e: KeyboardEvent) => {
      if (!handleRef.current || !handleRef.current.offsetParent) return;

      const { offsetLeft } = handleRef.current;
      const offsetParent = handleRef.current.offsetParent as HTMLElement;

      if (e.code === "ArrowRight") {
        setPositioning(offsetLeft + offsetParent.offsetLeft - 10);
      }

      if (e.code === "ArrowRight") {
        setPositioning(offsetLeft + offsetParent.offsetLeft + 10);
      }
    },
    [setPositioning]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleSlideForKeyboard);
  }, [handleSlideForKeyboard]);

  useEffect(() => {
    if (isSliding) {
      window.addEventListener("mousemove", handleSlide);
      window.addEventListener("touchmove", handleSlide);
      window.addEventListener("mouseup", handleSlideEnd);
      window.addEventListener("touchend", handleSlideEnd);

      return () => {
        window.removeEventListener("mousemove", handleSlide);
        window.removeEventListener("mouseup", handleSlideEnd);
        window.removeEventListener("touchmove", handleSlide);
        window.removeEventListener("touchend", handleSlideEnd);
        window.removeEventListener("keydown", handleSlideForKeyboard);
      };
    }
  }, [isSliding, handleSlide, handleSlideEnd, handleSlideForKeyboard]);

  return (
    <div className="w-full lg:w-2/3 relative aspect-[17/10] mx-auto" ref={parentRef}>
      <div
        className="select-none pointer-events-none z-10 w-full h-full absolute top-0 left-0 rounded-xl overflow-hidden"
        style={leftItemStyle}
        draggable={false}
      >
        {item1}
      </div>

      <div
        className="select-none pointer-events-none w-full h-full absolute top-0 left-0 rounded-xl overflow-hidden"
        draggable={false}
      >
        {item2}
      </div>
      <button
        type="button"
        className="group focus:outline-none focus-visible:outline-none absolute top-0 bottom-0 left-1/2 -translate-x-1/2 cursor-grab z-30 w-10 h-full flex items-center justify-center before:w-0.5 before:absolute before:bg-white before:h-full"
        ref={handleRef}
        onMouseDown={() => setIsSliding(true)}
        onTouchStart={() => setIsSliding(true)}
      >
        <svg
          role="presentation"
          focusable="false"
          width="28"
          height="35"
          viewBox="0 0 32 40"
          className="z-10 group-focus-visible:outline group-focus-visible:outline-blue-400"
        >
          <path
            d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16V24C32 32.8366 24.8366 40 16 40C7.16344 40 0 32.8366 0 24V16Z"
            fill="#ffffff"
          ></path>
          <path fill="#000000" d="M11 14H13V26H11zM15 14H17V26H15zM19 14H21V26H19z"></path>
        </svg>

        <span className="sr-only">Slider Handle</span>
      </button>
    </div>
  );
}
