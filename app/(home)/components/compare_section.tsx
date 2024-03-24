import { BLUR_DATA_URL } from "@/lib/constants";
import { urlForImage } from "@/sanity/lib/image";
import { HomePage } from "@/types/sanity";
import Image from "next/image";
import CompareSlider from "./compare_slider";

type Props = {
  data: HomePage["compareSection"];
};
export default function CompareSection({ data }: Props) {
  return (
    <section className="px-5 md:px-8 lg:px-12 pb-12 md:pb-16 lg:pb-20">
      <div className="lg:max-w-[50%] text-center mb-12 mx-auto">
        <p className="font-bold text-sm md:text-base">{data.subheading}</p>
        <h2 className="mt-4 md:mt-6 text-[2rem] md:text-[2.5rem] font-bold leading-[1.1]">
          {data.heading}
        </h2>
        <p className="mt-5 md:mt-8 text-sm md:text-base leading-normal">{data.content}</p>
      </div>

      <CompareSlider
        item1={
          <div className="p-4 md:p-8 relative w-full h-full flex items-end">
            <Image
              src={urlForImage(data.beforeImage)}
              alt=""
              fill
              blurDataURL={BLUR_DATA_URL}
              placeholder="blur"
              draggable={false}
              className="select-none pointer-events-none object-cover object-center"
            />
            <span className="font-bold text-lg md:text-xl relative ">{data.beforeText}</span>
          </div>
        }
        item2={
          <div className="p-4 md:p-8 relative w-full h-full flex items-end justify-end">
            <Image
              src={urlForImage(data.afterImage)}
              alt=""
              fill
              draggable={false}
              blurDataURL={BLUR_DATA_URL}
              placeholder="blur"
              className="select-none pointer-events-none object-cover object-center"
            />
            <span className="font-bold text-white text-lg md:text-xl relative">
              {data.afterText}
            </span>
          </div>
        }
      />
    </section>
  );
}
