"use client";

import ArrowDownIcon from "@/components/icons/arrow_down_icon";
import Hamburger from "@/components/icons/hamburger";
import Search from "@/components/icons/search";
import useInitialBoundingRect from "@/lib/hooks/use_initial_bounding_rect";
import useIsMounted from "@/lib/hooks/use_is_mounted";
import { NavBar as INavBar } from "@/types/sanity";
import { Maybe, Product } from "@/types/shopify";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { ReactNode, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";
import CollaborationsSubsection from "./collaborations_subsection";
import MobileNav from "./mobile_nav";
import ShopSubsection from "./shop_subsection";

export interface NavBarData extends INavBar {
  collaborationsFeaturedProduct: Maybe<Product>;
}

type Props = {
  data: NavBarData;
  isTransparent?: boolean;
  // No value means nav bar will be sticky from start
  stickyObserverDistanceInPixels?: number;
  cartComponent: ReactNode;
};

export default function NavBar({
  data,
  cartComponent,
  isTransparent = false,
  stickyObserverDistanceInPixels = 0,
}: Props) {
  const [previousObserverTop, setPreviousObserverTop] = useState(0);
  const [isCollabMenuOpen, setIsCollabMenuOpen] = useState(false);
  const [isNavBarSticky, setIsNavBarSticky] = useState(false);
  const isMounted = useIsMounted();
  const navRef = useRef<HTMLDivElement>(null);
  const initialBoundingRect = useInitialBoundingRect(navRef);

  const { ref: stickyObserverRef } = useInView({
    onChange: (inView, entry) => {
      if (entry.boundingClientRect.top < previousObserverTop && !inView) {
        // When User scrolls down and observer is hidden
        setIsNavBarSticky(true);
      } else if (entry.boundingClientRect.top > previousObserverTop && inView) {
        // when User scrolls up and observer is shown
        setIsNavBarSticky(false);
      }

      setPreviousObserverTop(entry.boundingClientRect.top);
    },
  });

  const handleCollabMenuChange = (menuVisibility: boolean) => {
    setIsCollabMenuOpen(menuVisibility);
  };

  const { top = 0 } = initialBoundingRect || {};

  // Nav bar background loses opacity if it becomes sticky or collab menu opens
  if (isNavBarSticky || isCollabMenuOpen) isTransparent = false;

  if (isCollabMenuOpen) stickyObserverDistanceInPixels = 0;

  return (
    <>
      {isMounted &&
        createPortal(
          // Nav becomes sticky when scrolls down past an observer and changes back to normal when the
          // user scrolls up past the observer.
          <div
            id="navstickyObserver"
            className="absolute h-px bg-transparent w-px"
            style={{ top: `${stickyObserverDistanceInPixels + top}px` }}
            aria-hidden
            ref={stickyObserverRef}
          ></div>,
          document.body
        )}
      <nav
        className={twMerge(
          "w-full grid grid-cols-[1fr_max-content_1fr] items-center p-5 md:p-8 lg:px-12 lg:py-8 bg-main-bg text-text relative",
          isTransparent && "bg-opacity-0 text-white",
          isNavBarSticky && "fixed z-50 top-0 text-text"
        )}
        ref={navRef}
      >
        {/* MOBILE HAMBURGER */}
        <div className="flex gap-4 items-center lg:hidden">
          <Dialog.Root modal>
            <Dialog.Trigger asChild>
              <button type="button">
                <Hamburger />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <MobileNav data={data} />
            </Dialog.Portal>
          </Dialog.Root>

          <button type="button" className="md:hidden">
            <Search />
          </button>
        </div>

        {/* Logo and heading */}
        <div className="h-5">
          <h1 aria-hidden className="sr-only">
            Lumino
          </h1>
          <Link href="/">
            <span className="font-black tracking-wide text-2xl h-5 uppercase leading-none">
              Lumino
            </span>
          </Link>
        </div>

        {/* Main nav */}
        <nav className="relative hidden lg:block">
          <ul className="flex gap-6 font-bold">
            <li>
              <ShopSubsection data={data} />
            </li>

            <li>
              <CollaborationsSubsection
                data={data}
                containerRef={navRef}
                handleMenuChange={handleCollabMenuChange}
              />
            </li>

            <li>
              <Link href="#" className="hover:opacity-70">
                Compare
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-70">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-70">
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Secondary nav */}
        <ul className="flex gap-6 w-full justify-end items-center">
          <li className="hidden lg:list-item">
            <button type="button" className="font-bold flex gap-2">
              <span className="text-sm">NGN ₦</span>
              <ArrowDownIcon className="mt-1 inline-block" />
            </button>
          </li>
          <li className="hidden md:list-item">
            <button type="button" className="inline-block">
              <span className="sr-only">Open Search</span>
              <Search />
            </button>
          </li>

          <li className="hidden md:list-item">
            <a href="#" className="inline-block">
              <span className="sr-only">Open Account Page</span>
              <svg
                role="presentation"
                strokeWidth="2"
                focusable="false"
                width="22"
                height="22"
                viewBox="0 0 22 22"
              >
                <circle cx="11" cy="7" r="4" fill="none" stroke="currentColor"></circle>
                <path
                  d="M3.5 19c1.421-2.974 4.247-5 7.5-5s6.079 2.026 7.5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                ></path>
              </svg>
            </a>
          </li>

          <li>{cartComponent}</li>
        </ul>
      </nav>
    </>
  );
}
