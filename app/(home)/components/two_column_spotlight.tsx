import { spotlight } from "@/sanity/schema/objects";
import { HomePage } from "@/types/sanity";

type Props = {
  data: HomePage["twoColumnSpotlight"];
};

export default function TwoColumnSpotlight({ data }: Props) {
  return (
    <div className="px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-[4.5rem] flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] gap-10 md:gap-12 text-white text-center bg-[linear-gradient(90deg,_rgba(77,_82,_60,_1),_rgba(133,_141,_103,_1)_100%)]">
      {data.map((spotlight, index) => [
        index !== 0 && <span className="hidden lg:block h-full w-px bg-white/10"></span>,
        <div key={spotlight._key}>
          <h2 className="text-[calc(min(20vw,4rem)_*_1.5)] md:text-[calc(15vw_*_.75)] font-bold mb-[.2em] leading-none">
            {spotlight.spotlightText}
          </h2>
          <h3 className="text-[22px] md:text-[26px] font-bold mb-5 md:mb-6 leading-none">
            {spotlight.subheading}
          </h3>
          <p className="text-sm md:text-base leading-normal">{spotlight.content}</p>
        </div>,
      ])}
    </div>
  );
}
