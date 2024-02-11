import Image from "next/image";
import Link from "next/link";

export default function CollectionsMediaGrid() {
  return (
    <section className="px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 grid-flow-dense auto-rows-[150px] md:auto-rows-[calc(100vw_/_5)] grid-cols-2 md:grid-cols-4 grid-rows grid gap-2.5 lg:gap-6">
      <Link
        href="#"
        className="col-span-2 row-span-2 flex flex-col justify-center md:justify-end relative p-[8%] rounded-xl overflow-hidden"
      >
        <Image
          src="/images/accessories-media.jpg"
          alt=""
          fill
          className="object-cover object-center"
        />
        <span className="text-2xl md:text-[32px] text-center md:text-left font-bold text-white z-10 relative">
          MG20 Gaming Headphones
        </span>
      </Link>

      <Link
        href="#"
        className="flex flex-col justify-end relative p-4 md:p-8 lg:p-[8%] rounded-xl overflow-hidden"
      >
        <Image src="/images/mw08-media.jpg" alt="" fill className="object-cover object-center" />
        <span className="text-lg leading-tight md:text-xl font-bold text-white z-10 relative">
          MW08 Sport
        </span>
      </Link>

      <Link
        href="#"
        className="flex flex-col justify-end relative p-4 md:p-8 lg:p-[8%] rounded-xl overflow-hidden"
      >
        <Image
          src="/images/accessories-media.jpg"
          alt=""
          fill
          className="object-cover object-center"
        />
        <span className="text-lg leading-tight md:text-xl font-bold text-white z-10 relative">
          Accesories
        </span>
      </Link>

      <Link
        href="#"
        className="col-span-2 flex flex-col justify-end relative p-4 md:p-8 lg:p-[8%] rounded-xl overflow-hidden"
      >
        <Image src="/images/mh40-media.jpg" alt="" fill className="object-cover object-center" />
        <span className="text-2xl md:text-[32px] font-bold text-white z-10 relative">
          MH40 Wireless
        </span>
      </Link>
    </section>
  );
}
