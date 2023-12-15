"use client";

import * as AccordionRadix from "@radix-ui/react-accordion";

type Props = {
  items: { heading: string; text: string }[];
};
export default function Accordion({ items }: Props) {
  return (
    <AccordionRadix.Root type="multiple" className="px-12 py-5 bg-text/5 rounded-xl">
      {items.map((item) => (
        <AccordionRadix.Item
          key={item.heading}
          value={item.heading}
          className="border-b last:border-b-0"
        >
          <AccordionRadix.Header className="py-5 font-bold">
            <AccordionRadix.Trigger>{item.heading}</AccordionRadix.Trigger>
          </AccordionRadix.Header>
          <AccordionRadix.Content className="overflow-hidden mb-5 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            {item.text}
          </AccordionRadix.Content>
        </AccordionRadix.Item>
      ))}
    </AccordionRadix.Root>
  );
}
