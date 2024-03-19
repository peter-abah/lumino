"use client";

import { PortableText } from "@portabletext/react";
import { type PortableTextBlock } from "sanity";

type Props = {
  copywright: PortableTextBlock[];
};
export default function Copywright({ copywright }: Props) {
  return (
    <div className="copywright text-sm text-text/70 max-w-sm md:-order-1 mb-1">
      <PortableText value={copywright} />
    </div>
  );
}
