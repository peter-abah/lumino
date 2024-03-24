import { BLUR_DATA_URL } from "@/lib/constants";
import { urlForImage } from "@/sanity/lib/image";
import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ArrowDownIcon from "../icons/arrow_down_icon";
import ArrowLeft from "../icons/arrow_left";
import CloseIcon from "../icons/close_icon";
import { NavBarData } from "./nav_bar";
import NavigationPromo from "./nav_promo";

interface Panel {
  id: string;
  parentID: string | null;
}

type Props = {
  data: NavBarData;
};

const PANELS: Panel[] = [
  { id: "nav", parentID: null },
  { id: "shop", parentID: "nav" },
  { id: "collaboration", parentID: "nav" },
  { id: "headphones", parentID: "shop" },
  { id: "earphones", parentID: "shop" },
];

const panelMap = PANELS.reduce((map, panel) => {
  map[panel.id] = panel;
  return map;
}, {} as Record<Panel["id"], Panel>);

export default function MobileNav({ data }: Props) {
  const [currentPanelID, setCurrentPanelID] = useState<Panel["id"]>("nav");
  const currentPanel = panelMap[currentPanelID];

  const {
    collaborationsFeaturedProduct,
    collaborationsPromoProducts,
    headphonesLinks,
    earphonesLinks,
  } = data;

  return (
    <>
      <Dialog.Overlay className="bg-black/60 z-50 fixed inset-0 h-screen" />
      <Dialog.Content className="fixed h-[75vh] bottom-0 z-[100] w-full p-2">
        <Dialog.Close asChild>
          <button className="w-12 aspect-square bg-white rounded-full grid place-items-center absolute left-0 right-0 bottom-full mb-4 mx-auto">
            <CloseIcon width={24} height={24} />
          </button>
        </Dialog.Close>

        <div className="p-6 rounded-md h-full bg-white overflow-y-auto">
          <div className={clsx(currentPanel.id !== "nav" && "hidden")}>
            <div>
              <ul className="flex flex-col gap-4 text-2xl font-bold">
                <li>
                  <button
                    type="button"
                    className="group flex w-full items-center justify-between"
                    onClick={() => setCurrentPanelID("shop")}
                  >
                    Shop
                    <span className="w-6 h-6 rounded-full bg-text/10 grid place-items-center group-hover:bg-text group-hover:text-white">
                      <ArrowDownIcon className="-rotate-90" width={8} />
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="group flex w-full items-center justify-between"
                    onClick={() => setCurrentPanelID("collaboration")}
                  >
                    Collaborations
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
                    Compare
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="relative before:h-0.5 before:absolute before:bottom-0 before:bg-text hover:before:w-full hover:before:scale-x-100 before:scale-x-0 before:origin-left"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="relative before:h-0.5 before:absolute before:bottom-0 before:bg-text hover:before:w-full hover:before:scale-x-100 before:scale-x-0 before:origin-left"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* SHOP PANEL */}
          <div
            className={clsx(currentPanelID !== "shop" && "hidden")}
            data-panel-id={currentPanel.id}
          >
            <div>
              <button
                className="text-text/70 flex items-center gap-3 mb-4 font-bold"
                onClick={() => setCurrentPanelID(currentPanel.parentID || "nav")}
              >
                <ArrowLeft />
                <span>Shop</span>
              </button>
              <ul className="flex flex-col gap-4 text-2xl font-bold">
                <li>
                  <button
                    type="button"
                    className="group flex w-full items-center justify-between"
                    onClick={() => setCurrentPanelID("headphones")}
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
                    onClick={() => setCurrentPanelID("earphones")}
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
          </div>

          {/* COLLABORATIONS PANEL */}
          <div
            className={clsx(currentPanelID !== "collaboration" && "hidden")}
            data-panel-id={currentPanel.id}
          >
            <div>
              <button
                className="text-text/70 flex items-center gap-3 mb-4 font-bold"
                onClick={() => setCurrentPanelID(currentPanel.parentID || "nav")}
              >
                <ArrowLeft />
                <span>Collaborations</span>
              </button>
              <ul className="flex flex-col gap-4 text-2xl font-bold mb-6">
                {data.newCollaborations.map((collaboration) => (
                  <li key={collaboration._key}>
                    <Link
                      href={collaboration.url}
                      className="relative before:h-0.5 before:absolute before:bottom-0 before:bg-text hover:before:w-full hover:before:scale-x-100 before:scale-x-0 before:origin-left"
                    >
                      {collaboration.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/collections/all"
                    className="relative before:h-0.5 before:absolute before:bottom-0 before:bg-text hover:before:w-full hover:before:scale-x-100 before:scale-x-0 before:origin-left"
                  >
                    View all
                  </Link>
                </li>
              </ul>

              {/* COllaborations Promo Products */}
              <div className="grid gap-2 overflow-x-auto grid-cols-[repeat(3,172px)]">
                {collaborationsPromoProducts.map((product) => (
                  <Link
                    key={product._key}
                    href={product.url}
                    className="relative aspect-square p-8 flex items-end rounded-md overflow-hidden group"
                  >
                    <span className="font-bold text-2xl z-10 text-white">{product.name}</span>
                    <Image
                      src={urlForImage(product.image)}
                      fill
                      alt=""
                      aria-hidden
                      blurDataURL={BLUR_DATA_URL}
                      placeholder="blur"
                      className="group-hover:scale-110"
                    />
                  </Link>
                ))}

                {/* COllaborations Featured Product */}
                {collaborationsFeaturedProduct && (
                  <div className="rounded-md p-8 bg-white">
                    <Link href="#" className="flex justify-center mb-4">
                      <Image
                        src={collaborationsFeaturedProduct.featuredImage.url}
                        alt={collaborationsFeaturedProduct.featuredImage.altText}
                        width={160}
                        height={160}
                        aria-hidden
                        blurDataURL={BLUR_DATA_URL}
                        placeholder="blur"
                      />
                    </Link>
                    <div className="flex flex-col gap-0.5 text-center">
                      <Link
                        href={`/products/${collaborationsFeaturedProduct.handle}`}
                        className="font-bold"
                      >
                        {collaborationsFeaturedProduct.title}
                      </Link>
                      <span className="text-text/70 flex justify-center gap-1">
                        <span>
                          {collaborationsFeaturedProduct.priceRange.maxVariantPrice.currencyCode}
                        </span>
                        <span>
                          {collaborationsFeaturedProduct.priceRange.maxVariantPrice.amount}
                        </span>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* HEADPHONES PANEL */}
          <div
            className={clsx(currentPanelID !== "headphones" && "hidden")}
            data-panel-id={currentPanel.id}
          >
            <button
              className="text-text/70 flex items-center gap-3 mb-4 font-bold"
              onClick={() => setCurrentPanelID(currentPanel.parentID || "nav")}
            >
              <ArrowLeft />
              <span>Headphones</span>
            </button>

            <ul className="flex flex-col gap-4">
              {headphonesLinks.map((link) => (
                <li key={link._key}>
                  <Link href={link.url} className="flex gap-4 items-center">
                    <Image
                      src={urlForImage(link.imageIcon)}
                      alt=""
                      width={48}
                      height={48}
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

          {/* EARPHONES PANEL */}
          <div
            className={clsx(currentPanelID !== "earphones" && "hidden")}
            data-panel-id={currentPanel.id}
          >
            <button
              className="text-text/70 flex items-center gap-3 mb-4 font-bold"
              onClick={() => setCurrentPanelID(currentPanel.parentID || "nav")}
            >
              <ArrowLeft />
              <span>Earphones</span>
            </button>

            <ul className="flex flex-col gap-4">
              {earphonesLinks.map((link) => (
                <li key={link._key}>
                  <Link href={link.url} className="flex gap-4 items-center">
                    <Image
                      src={urlForImage(link.imageIcon)}
                      alt=""
                      width={48}
                      height={48}
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
    </>
  );
}
