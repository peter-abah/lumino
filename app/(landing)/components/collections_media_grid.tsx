import Image from "next/image";
import Link from "next/link";

export default function CollectionsMediaGrid() {
  return (
    <section className="px-12 py-20 grid-flow-dense auto-rows-[calc(100vw_/_5)] grid-cols-4 grid-rows grid gap-6">
      <Link
        href="#"
        className="col-span-2 row-span-2 flex flex-col justify-end relative p-[8%] rounded-xl overflow-hidden"
      >
        <Image
          src="/images/accessories-media.jpg"
          alt=""
          fill
          className="object-cover object-center"
        />
        <span className="text-[32px] font-bold text-white z-10 relative">
          MG20 Gaming Headphones
        </span>
      </Link>

      <Link
        href="#"
        className="flex flex-col justify-end relative p-[8%] rounded-xl overflow-hidden"
      >
        <Image src="/images/mw08-media.jpg" alt="" fill className="object-cover object-center" />
        <span className="text-xl font-bold text-white z-10 relative">MW08 Sport</span>
      </Link>

      <Link
        href="#"
        className="flex flex-col justify-end relative p-[8%] rounded-xl overflow-hidden"
      >
        <Image
          src="/images/accessories-media.jpg"
          alt=""
          fill
          className="object-cover object-center"
        />
        <span className="text-xl font-bold text-white z-10 relative">Accesories</span>
      </Link>

      <Link
        href="#"
        className="col-span-2 flex flex-col justify-end relative p-[8%] rounded-xl overflow-hidden"
      >
        <Image src="/images/mh40-media.jpg" alt="" fill className="object-cover object-center" />
        <span className="text-[32px] font-bold text-white z-10 relative">MH40 Wireless</span>
      </Link>
    </section>
  );
}
