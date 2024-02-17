"use client";

import * as AccordionRadix from "@radix-ui/react-accordion";
import { type Key } from "react";
import ArrowDownIcon from "./icons/arrow_down_icon";

type Props = {
  items: { heading: string; text: string; key: Key }[];
};
export default function Accordion({ items }: Props) {
  return (
    <AccordionRadix.Root
      type="multiple"
      className="px-6 py-1 lg:px-12 lg:py-5 bg-text/5 rounded-xl"
    >
      {items.map((item) => (
        <AccordionRadix.Item
          key={item.key}
          value={item.key.toString()}
          className="border-b last:border-b-0"
        >
          <AccordionRadix.Header className="py-5 font-bold">
            <AccordionRadix.Trigger className="group flex justify-between gap-4 w-full text-sm md:text-base text-left">
              <span>{item.heading}</span>
              <span
                aria-hidden
                className="w-6 aspect-square rounded-full grid place-items-center bg-text/10 group-hover:bg-text group-hover:text-white"
              >
                <ArrowDownIcon className="w-2" />
              </span>
            </AccordionRadix.Trigger>
          </AccordionRadix.Header>
          <AccordionRadix.Content className="overflow-hidden mb-5 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            {item.text}
          </AccordionRadix.Content>
        </AccordionRadix.Item>
      ))}
    </AccordionRadix.Root>
  );
}
