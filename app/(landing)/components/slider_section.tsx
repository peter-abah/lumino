import Image from "next/image";
import CompareSlider from "./compare_slider";

export default function SliderSection() {
  return (
    <section className="px-5 md:px-8 lg:px-12 pb-12 md:pb-16 lg:pb-20">
      <div className="lg:max-w-[50%] text-center mb-12 mx-auto">
        <p className="font-bold text-sm md:text-base">MH40 Headphones</p>
        <h2 className="mt-4 md:mt-6 text-[2rem] md:text-[2.5rem] font-bold leading-[1.1]">
          An icon, now wireless!
        </h2>
        <p className="mt-5 md:mt-8 text-sm md:text-base leading-normal">
          MH40 Wireless Over-Ear Headphones are an evolution of our very first headphones “The MH40”
          in celebration of our five year anniversary.
        </p>
      </div>

      <CompareSlider
        item1={
          <div className="p-4 md:p-8 relative w-full h-full flex items-end">
            <Image
              src="/images/mh40-slide-wired.jpg"
              alt=""
              fill
              draggable={false}
              className="select-none pointer-events-none object-cover object-center"
            />
            <span className="font-bold text-lg md:text-xl relative ">MH40 Headphones</span>
          </div>
        }
        item2={
          <div className="p-4 md:p-8 relative w-full h-full flex items-end justify-end">
            <Image
              src="/images/mh40-slide-wireless.jpg"
              alt=""
              fill
              draggable={false}
              className="select-none pointer-events-none object-cover object-center"
            />
            <span className="font-bold text-white text-lg md:text-xl relative">MH40 Wireless Headphones</span>
          </div>
        }
      />
    </section>
  );
}
