// TODO: Move use client to down to components that actually are (radix ui)
"use client";

import ArrowDownIcon from "@/components/icons/arrow_down_icon";
import useIsMounted from "@/hooks/use_is_mounted";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";
import CollaborationsSubsection from "./collaborations_subsection";
import { ShopSubsection } from "./shop_subsection";
import Hamburger from "@/components/icons/hamburger";
import Search from "@/components/icons/search";
import { NavBarData } from "@/types/definition";

type Props = {
  data: NavBarData;
};
export default function NavBar({ data }: Props) {
  const [previousObserverTop, setPreviousObserverTop] = useState(0);
  const [isCollabMenuOpen, setIsCollabMenuOpen] = useState(false);
  const [isNavBarSticky, setIsNavBarSticky] = useState(false);
  const isMounted = useIsMounted();

  const navRef = useRef<HTMLDivElement>(null);
  const isHomePage = true; // TODO: This will be changed to a prop

  const { ref: stickyObserverRef } = useInView({
    onChange: (inView, entry) => {
      // Prevent change in nav sticky position when collab menu is open
      // Collab menu handler will handle sticky value
      if (isCollabMenuOpen) return;

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
    setIsNavBarSticky(menuVisibility);
  };

  // TODO: nav sticky still has some issues
  return (
    <>
      {isMounted &&
        createPortal(
          // Nav becomes sticky when scrolls down past an observer and changes back to normal when the
          // user scrolls up past the observer.
          <div
            className="absolute top-[32rem] h-4 bg-transparent w-8"
            aria-hidden
            ref={stickyObserverRef}
          ></div>,
          document.body
        )}
      <nav
        className={twMerge(
          "absolute z-50 top-0 w-full grid grid-cols-[1fr_max-content_1fr] items-center p-5 md:p-8 lg:px-12 lg:py-8 bg-main-bg text-text",
          isHomePage && "bg-opacity-0 text-white",
          isNavBarSticky && "fixed bg-opacity-100 text-text"
        )}
        ref={navRef}
      >
        {/* Mobile Hamburger */}
        <div className="flex gap-4 items-center lg:hidden">
          <button type="button">
            <Hamburger />
          </button>

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
              <Dialog.Root modal>
                <Dialog.Trigger asChild>
                  <button
                    type="button"
                    className="flex gap-2.5 items-center hover:opacity-70"
                  >
                    Shop <ArrowDownIcon />
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <ShopSubsection data={data} />
                </Dialog.Portal>
              </Dialog.Root>
            </li>
            <li>
              <Dialog.Root modal onOpenChange={handleCollabMenuChange}>
                <Dialog.Trigger asChild>
                  <button
                    type="button"
                    className="flex gap-2.5 items-center hover:opacity-70"
                  >
                    Collaboration <ArrowDownIcon />
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal container={navRef.current}>
                  <CollaborationsSubsection data={data} />
                </Dialog.Portal>
              </Dialog.Root>
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
              <span className="text-sm">USD $</span>
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
                <circle
                  cx="11"
                  cy="7"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                ></circle>
                <path
                  d="M3.5 19c1.421-2.974 4.247-5 7.5-5s6.079 2.026 7.5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                ></path>
              </svg>
            </a>
          </li>

          <li>
            <a href="#" className="hover:scale-105 inline-block">
              <span className="sr-only">Open Cart</span>
              <svg
                role="presentation"
                strokeWidth="2"
                focusable="false"
                width="22"
                height="22"
                viewBox="0 0 22 22"
              >
                <path
                  d="M11 7H3.577A2 2 0 0 0 1.64 9.497l2.051 8A2 2 0 0 0 5.63 19H16.37a2 2 0 0 0 1.937-1.503l2.052-8A2 2 0 0 0 18.422 7H11Zm0 0V1"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
