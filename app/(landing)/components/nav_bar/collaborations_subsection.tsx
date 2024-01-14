import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import Image from "next/image";

const NEW_COLLABORATIONS_LINKS = [
  { name: "Leica 0.95", link: "#" },
  { name: "Paris Saint-Germain", link: "#" },
  { name: "Automobili Lamborghini", link: "#" },
  { name: "View all", link: "#" },
];

const COLLABORATIONS_PROMO_PRODUCTS = [
  { name: "Leica 0.95", link: "#", image: "/images/leica-cover_mobile.jpg" },
  { name: "Paris Saint-Germain", link: "#", image: "/images/psg.jpg" },
];

export default function CollaborationsSubsection() {
  return (
    <>
      <Dialog.Content className="absolute top-full w-full z-50 border-t-[1px] py-10 shadow-overlay bg-main-bg text-text flex gap-12 px-12 max-h-[calc(100vh_-_96px_-_20px)] justify-between overflow-y-auto overflow-x-hidden">
        <div className="min-w-[240px]">
          <h3 className="mb-4">New</h3>
          <ul className="flex flex-col gap-2">
            {NEW_COLLABORATIONS_LINKS.map((link) => (
              <li key={link.name}>
                <Link href={link.link} className="font-bold text-xl fancy-hover-underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="grid grid-cols-[repeat(3,300px)] gap-4">
            {COLLABORATIONS_PROMO_PRODUCTS.map((product) => (
              <Link
                key={product.name}
                href={product.link}
                className="relative aspect-square p-8 flex items-end rounded-md overflow-hidden group"
              >
                <span className="font-bold text-2xl z-10 text-white">{product.name}</span>
                <Image
                  src={product.image}
                  fill
                  alt=""
                  aria-hidden
                  className="group-hover:scale-110"
                />
              </Link>
            ))}

            {/* Product card */}
            <div className="rounded-md p-8 bg-white">
              <Link href="#" className="flex justify-center mx-9 mb-4">
                <Image src="/images/MH40WPSGPT.png" alt="" width={160} height={160} aria-hidden />
              </Link>
              <div className="flex flex-col gap-0.5 text-center">
                <Link href="#" className="font-bold">
                  MH40 Wireless Paris Saint-Germain
                </Link>
                <span className="text-text/70">$299.00</span>
              </div>
            </div>
          </div>
        </div>
      </Dialog.Content>
    </>
  );
}
