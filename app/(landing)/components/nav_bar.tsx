// TODO: Move use client to down to components that actually are (radix ui)
"use client";

import { useContext } from "react";
import { NavBarStickyContext, NavBarStickyContextType } from "../contexts/nav_bar_sticky_context";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import ArrowDownIcon from "@/app/components/icons/arrow_down_icon";
import CloseIcon from "@/app/components/icons/close_icon";
import { twMerge } from "tailwind-merge";

export default function NavBar() {
  const { isNavBarSticky } = useContext(NavBarStickyContext) as NavBarStickyContextType;

  return (
    <nav
      className={twMerge(
        "absolute z-50 top-0 w-full text-white grid grid-cols-[1fr_max-content_1fr] items-center px-12 py-8",
        isNavBarSticky && "fixed bg-main-bg text-text"
      )}
    >
      <h1 className="font-bold text-2xl uppercase">
        <Link href="/">Lumino</Link>
      </h1>

      <nav>
        <ul className="flex gap-6 font-bold">
          <li>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button type="button" className="flex gap-2.5 items-center hover:opacity-70">
                  Shop <ArrowDownIcon />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="bg-black/60 fixed inset-0 h-screen" />
                <Dialog.Content className="p-10 absolute top-4 left-4 bottom-4 w-96 bg-white rounded-md z-10">
                  <Dialog.Close className="mb-8 w-12 h-12 grid place-items-center border border-text/10 rounded-full hover:rotate-90 transition-transform duration-200">
                    <CloseIcon />
                  </Dialog.Close>
                  <ul className="flex flex-col gap-4 text-2xl font-bold">
                    <li>
                      <button
                        type="button"
                        className="group flex w-full items-center justify-between"
                      >
                        Headphones
                        <span className="w-6 h-6 rounded-full bg-text/10 grid place-items-center group-hover:bg-text group-hover:text-white">
                          <ArrowDownIcon className="-rotate-90" width={8} />
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="group flex w-full items-center justify-between"
                      >
                        Earphones
                        <span className="w-6 h-6 rounded-full bg-text/10 grid place-items-center group-hover:bg-text group-hover:text-white">
                          <ArrowDownIcon className="-rotate-90" width={8} />
                        </span>
                      </button>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="relative before:h-0.5 before:absolute before:bottom-0 before:bg-text hover:before:w-full hover:before:scale-x-100 before:scale-x-0 before:origin-left"
                      >
                        Accessories
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="relative before:h-0.5 before:absolute before:bottom-0 before:bg-text hover:before:w-full hover:before:scale-x-100 before:scale-x-0 before:origin-left"
                      >
                        Speaker
                      </Link>
                    </li>
                  </ul>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </li>
          <li>
            <button type="button" className="flex gap-2.5 items-center hover:opacity-70">
              Collaboration <ArrowDownIcon />
            </button>
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

      <ul className="flex gap-6 w-full justify-end items-center">
        <li>
          <button type="button" className="font-bold flex items-center gap-2">
            <span className="text-sm">USD $</span>
            <ArrowDownIcon />
          </button>
        </li>
        <li>
          <a href="#" className="inline-block">
            <span className="sr-only">Open Search</span>
            <svg
              role="presentation"
              strokeWidth="2"
              focusable="false"
              width="22"
              height="22"
              viewBox="0 0 22 22"
            >
              <circle cx="11" cy="10" r="7" fill="none" stroke="currentColor"></circle>
              <path
                d="m16 15 3 3"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
        </li>

        <li>
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
  );
}
