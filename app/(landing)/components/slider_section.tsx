import Image from "next/image";
import CompareSlider from "./compare_slider";

export default function SliderSection() {
  return (
    <section className="px-12 pb-20">
      <div className="max-w-[50%] text-center mb-12 mx-auto">
        <p className="font-bold">MH40 Headphones</p>
        <h2 className="mt-6 text-[2.5rem] font-bold">An icon, now wireless!</h2>
        <p className="mt-8">
          MH40 Wireless Over-Ear Headphones are an evolution of our very first headphones “The MH40”
          in celebration of our five year anniversary.
        </p>
      </div>

      <CompareSlider
        item1={
          <div className="p-8 relative w-full h-full flex items-end">
            <Image
              src="/images/mh40-slide-wired.jpg"
              alt=""
              fill
              draggable={false}
              className="select-none pointer-events-none object-cover object-center"
            />
            <span className="font-bold text-xl relative">
              MH40 Headphones
            </span>
          </div>
        }
        item2={
          <div className="p-8 relative w-full h-full flex items-end justify-end">
            <Image
              src="/images/mh40-slide-wireless.jpg"
              alt=""
              fill
              draggable={false}
              className="select-none pointer-events-none object-cover object-center"
            />
            <span className="font-bold text-white text-xl relative">
              MH40 Wireless Headphones
            </span>
          </div>
        }
      />
    </section>
  );
}
