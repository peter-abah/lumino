"use client";

import { IconComponent } from "@/components/icons";
import DefaultIcon from "@/components/icons/default_icon";
import { InfoPanel } from "@/types/sanity";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  data: InfoPanel;
};
export default function TexWithIcons({ data }: Props) {
  const divRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);

  const { infoList } = data;
  const handleBenefitBtnClick = (index: number) => {
    setCurrentBenefitIndex(index);
    divRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <section className="px-5 md:px-8 lg:px-12 py-12 md:pt-0 md:pb-16 lg:pb-20 flex flex-col gap-8">
      <div className="grid grid-cols-[repeat(4,100%)] lg:grid-cols-4 gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory">
        {infoList.map(({ heading, content, iconID, _key }, index) => (
          <div
            key={_key}
            ref={(ref) => (divRefs.current[index] = ref)}
            className="flex flex-col items-center lg:items-start text-center lg:text-left snap-start snap-always"
          >
            {iconID ? <IconComponent name={iconID} /> : <DefaultIcon />}
            <h3 className="mt-6 mb-4 md:text-lg font-bold">{heading}</h3>
            <p className="text-sm md:text-base leading-normal">{content}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-4 w-fit mx-auto lg:hidden">
        {infoList.map(({ _key }, index) => (
          <button
            key={_key}
            className={twMerge(
              "w-1.5 aspect-square rounded-full bg-current opacity-30",
              currentBenefitIndex === index && "opacity-100"
            )}
            onClick={() => handleBenefitBtnClick(index)}
          >
            <span className="sr-only">Go to info {index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
