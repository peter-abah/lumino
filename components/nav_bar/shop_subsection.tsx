"use client";

import ArrowDownIcon from "@/components/icons/arrow_down_icon";
import CloseIcon from "@/components/icons/close_icon";
import { urlForImage } from "@/sanity/lib/image";
import { LinkWithIcon, NavBarData, SanityArray } from "@/types/sanity";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import NavigationPromo from "./nav_promo";

// const EARPHONES_LINKS = [
//   { name: "MW08 Sport", link: "#", image: "/images/nav-earphones-MW08Sport.png" },
//   { name: "MW08", link: "#", image: "/images/nav-earphones-MW08BU.png" },
//   { name: "MW07 Plus", link: "#", image: "/images/nav-earphones-MW07TS.png" },
//   { name: "MW07 Plus Leica", link: "#", image: "/images/nav-earphones-MW07PlusLeica.png" },
//   {
//     name: "MW07 Plus Paris Saint-Germain",
//     link: "#",
//     image: "/images/nav-earphones-MW07PlusParis.png",
//   },
//   { name: "View all", link: "#", image: "/images/nav-earphones-MW07-LAM2.png" },
// ];

// const HEADPHONES_LINKS = [
//   { name: "MW65", link: "#", image: "/images/nav-headphones-MW65.png" },
//   { name: "MG20", link: "#", image: "/images/nav-headphones-MG20.png" },
//   { name: "MH40 Wireless", link: "#", image: "/images/nav-headphones-MH40.png" },
//   { name: "MW50+", link: "#", image: "/images/nav-headphones-MW50.png" },
//   { name: "View all", link: "#", image: "/images/nav-headphones-MH40WP.png" },
// ];

// type PanelLinks = typeof EARPHONES_LINKS;

type Props = {
  data: NavBarData;
};
export default function ShopSubsection({ data }: Props) {
  const [secondPanelState, setSecondPanelState] = useState<{
    isOpen: boolean;
    links: SanityArray<LinkWithIcon>;
    heading: string;
  }>({
    isOpen: false,
    links: [],
    heading: "",
  });
  return (
    <>
      <Dialog.Overlay className="bg-black/60 fixed inset-0 h-screen" />
      <Dialog.Content
        className={twMerge(
          "absolute top-4 left-4 h-[calc(100vh_-_2rem)] grid grid-cols-[repeat(2,440px)] w-[440px] bg-white grid-rows-1 rounded-md z-50 overflow-hidden",
          secondPanelState.isOpen && "w-[880px]"
        )}
      >
        <div className="overflow-y-auto h-full p-10 col-span-1">
          <Dialog.Close className="mb-8 w-12 h-12 grid place-items-center border border-text/10 rounded-full hover:rotate-90 transition-transform duration-200">
            <CloseIcon />
          </Dialog.Close>
          <ul className="flex flex-col gap-4 text-2xl font-bold">
            <li>
              <button
                type="button"
                className="group flex w-full items-center justify-between"
                onClick={() =>
                  setSecondPanelState({
                    isOpen: true,
                    links: data.headphonesLinks,
                    heading: "Headphones",
                  })
                }
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
                onClick={() =>
                  setSecondPanelState({
                    isOpen: true,
                    links: data.earphonesLinks,
                    heading: "Headphones",
                  })
                }
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

          <NavigationPromo products={data.shopPromoProducts} />
        </div>

        {secondPanelState.isOpen && (
          <div className="overflow-y-auto h-full p-10 col-span-1 pt-[6.5rem]">
            <h3 className="sr-only">{secondPanelState.heading}</h3>
            <ul className="flex flex-col gap-4">
              {secondPanelState.links.map((link) => (
                <li key={link._key}>
                  <Link href={link.url} className="flex gap-4 items-center">
                    <Image
                      src={urlForImage(link.imageIcon)}
                      alt=""
                      width={60}
                      height={60}
                      aria-hidden
                    />
                    <span className="text-xl font-bold fancy-hover-underline">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Dialog.Content>
    </>
  );
}
