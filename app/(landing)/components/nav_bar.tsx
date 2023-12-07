// TODO: Move use client to down to components that actually are (radix ui)
"use client";

import * as Dialog from "@radix-ui/react-dialog";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="absolute top-0 w-full text-white grid grid-cols-[1fr_max-content_1fr] items-center px-12 py-8">
      <h1 className="font-bold text-2xl uppercase">
        <Link href="/">Lumino</Link>
      </h1>

      <nav>
        <ul className="flex gap-6 font-bold">
          <li>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button type="button" className="flex gap-2.5 items-center hover:opacity-70">
                  Shop <ArrowDown />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="bg-black/60 fixed inset-0 h-screen" />
                <Dialog.Content className="p-10 absolute top-4 left-4 bottom-4 w-96 bg-white rounded-md">
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
                          <ArrowDown className="-rotate-90" width={8} />
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
                          <ArrowDown className="-rotate-90" width={8} />
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
              Collaboration <ArrowDown />
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

      <ul className="flex gap-6 w-full justify-end">
        <li>
          <button type="button" className="hover:scale-105">
            $Cur
          </button>
        </li>
        <li>
          <a href="#" className="hover:scale-105 inline-block">
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
          <a href="#" className="hover:scale-105 inline-block">
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

interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {}
function ArrowDown(props: IconProps) {
  return (
    <svg role="presentation" focusable="false" width="10" height="7" viewBox="0 0 10 7" {...props}>
      <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2"></path>
    </svg>
  );
}

function CloseIcon(props: IconProps) {
  return (
    <svg
      role="presentation"
      strokeWidth="2"
      focusable="false"
      width="19"
      height="19"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M17.658 6.343 6.344 17.657M17.658 17.657 6.344 6.343" stroke="currentColor"></path>
    </svg>
  );
}
