"use client";

import ArrowDownIcon from "@/components/icons/arrow_down_icon";
import CloseIcon from "@/components/icons/close_icon";
import { BLUR_DATA_URL } from "@/lib/constants";
import { urlForImage } from "@/sanity/lib/image";
import { NavBar } from "@/types/sanity";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import NavigationPromo from "./nav_promo";

type Props = {
  data: NavBar;
};

interface Panel {
  id: string;
  parentID: string | null;
}

const PANELS: Record<string, Panel> = {
  headphones: { id: "headphones", parentID: null },
  earphones: { id: "earphones", parentID: null },
};

export default function ShopSubsection({ data }: Props) {
  // const [secondPanelState, setSecondPanelState] = useState<{
  //   isOpen: boolean;
  //   links: SanityArray<LinkWithIcon>;
  //   heading: string;
  // }>({
  //   isOpen: false,
  //   links: [],
  //   heading: "",
  // });

  const [currentSecondPanelID, setCurrentSecondPanelID] = useState<string | null>(null);

  const handleOpen = (isOpen: boolean) => {
    if (!isOpen) return;

    // Close second panel if open when the modal is opened again
    if (currentSecondPanelID) setCurrentSecondPanelID(null);
  };

  return (
    <Dialog.Root modal onOpenChange={handleOpen}>
      <Dialog.Trigger asChild>
        <button type="button" className="flex gap-2.5 items-center hover:opacity-70">
          Shop <ArrowDownIcon />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 fixed inset-0 h-screen" />
        <Dialog.Content
          className={twMerge(
            "absolute top-4 left-4 h-[calc(100vh_-_2rem)] grid grid-cols-[repeat(2,440px)] w-[440px] grid-rows-1 rounded-md z-50 overflow-hidden data-[state=open]:animate-scaleXOpen data-[state=closed]:animate-scaleXClose origin-left",
            currentSecondPanelID && "w-[880px]"
          )}
        >
          <div className="overflow-y-auto h-full p-10 col-span-1 bg-white text-text">
            <Dialog.Close className="mb-8 w-12 h-12 grid place-items-center border border-text/10 rounded-full hover:rotate-90 transition-transform duration-200">
              <CloseIcon />
            </Dialog.Close>
            <ul className="flex flex-col gap-4 text-2xl font-bold">
              <li>
                <button
                  type="button"
                  className="group flex w-full items-center justify-between"
                  onClick={() => setCurrentSecondPanelID("headphones")}
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
                  onClick={() => setCurrentSecondPanelID("earphones")}
                >
                  Earphones
                  <span className="w-6 h-6 rounded-full bg-text/10 grid place-items-center group-hover:bg-text group-hover:text-white">
                    <ArrowDownIcon className="-rotate-90" width={8} />
                  </span>
                </button>
              </li>
              <li>
                <Link
                  href="/collections/accessories"
                  className="relative before:h-0.5 before:absolute before:bottom-0 before:bg-text hover:before:w-full hover:before:scale-x-100 before:scale-x-0 before:origin-left"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/speakers"
                  className="relative before:h-0.5 before:absolute before:bottom-0 before:bg-text hover:before:w-full hover:before:scale-x-100 before:scale-x-0 before:origin-left"
                >
                  Speakers
                </Link>
              </li>
            </ul>

            <NavigationPromo products={data.shopPromoProducts} />
          </div>

          <div
            data-state={currentSecondPanelID ? "open" : "closed"}
            className="bg-white text-black overflow-y-auto h-full p-10 col-span-1 pt-[6.5rem] data-[state=open]:animate-scaleXOpen data-[state=closed]:animate-scaleXClose data-[state=closed]:hidden origin-left"
          >
            <div
              data-state={currentSecondPanelID === "headphones" ? "open" : "closed"}
              className="data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut data-[state=closed]:hidden"
            >
              <h3 className="sr-only">Headphones</h3>
              <ul className="flex flex-col gap-4">
                {data.headphonesLinks.map((link) => (
                  <li key={link._key}>
                    <Link href={link.url} className="flex gap-4 items-center">
                      <Image
                        src={urlForImage(link.imageIcon)}
                        alt=""
                        width={60}
                        height={60}
                        aria-hidden
                        blurDataURL={BLUR_DATA_URL}
                        placeholder="blur"
                      />
                      <span className="text-xl font-bold fancy-hover-underline">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              data-state={currentSecondPanelID === "earphones" ? "open" : "closed"}
              className="data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut data-[state=closed]:hidden"
            >
              <h3 className="sr-only">Earphones</h3>
              <ul className="flex flex-col gap-4">
                {data.earphonesLinks.map((link) => (
                  <li key={link._key}>
                    <Link href={link.url} className="flex gap-4 items-center">
                      <Image
                        src={urlForImage(link.imageIcon)}
                        alt=""
                        width={60}
                        height={60}
                        aria-hidden
                        blurDataURL={BLUR_DATA_URL}
                        placeholder="blur"
                      />
                      <span className="text-xl font-bold fancy-hover-underline">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
