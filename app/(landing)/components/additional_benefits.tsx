"use client";
import { IconComponent } from "@/app/components/icons";
import clsx from "clsx";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const BENEFITS = [
  {
    heading: "Designed in NYC",
    text: "Products designed and developed in New York City.",
    iconName: "location",
  },
  {
    heading: "Free Shipping",
    text: "Free worldwide shipping on all orders of $99",
    iconName: "globe",
  },
  { heading: "Support", text: "Our support team is available 24/7", iconName: "support" },
  { heading: "Secure Payment", text: "All payments are processed securely", iconName: "payments" },
];

export default function AdditionalBenefits() {
  const divRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);

  const handleBenefitBtnClick = (index: number) => {
    setCurrentBenefitIndex(index);
    divRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <section className="px-5 md:px-8 lg:px-12 py-12 md:pt-0 md:pb-16 lg:pb-20 flex flex-col gap-8">
      <div className="grid grid-cols-[repeat(4,100%)] lg:grid-cols-4 gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory">
        {BENEFITS.map((benefit, index) => (
          <div
            key={benefit.heading}
            ref={(ref) => (divRefs.current[index] = ref)}
            className="flex flex-col items-center lg:items-start text-center lg:text-left snap-start snap-always"
          >
            <IconComponent name={benefit.iconName} />
            <h3 className="mt-6 mb-4 md:text-lg font-bold">{benefit.heading}</h3>
            <p className="text-sm md:text-base leading-normal">{benefit.text}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-4 w-fit mx-auto lg:hidden">
        {BENEFITS.map((benefit, index) => (
          <button
            key={benefit.heading}
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
