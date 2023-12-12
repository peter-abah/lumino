"use client";

import PlusIcon from "@/app/components/icons/plus_icon";
import { ProductHotspot } from "@/app/types/definition";
import * as Dialog from "@radix-ui/react-dialog";

type Props = {
  hotspot: ProductHotspot;
};
export default function ShowcaseHotspot({ hotspot }: Props) {
  const { location } = hotspot;
  return (
    <div className="absolute flex" style={{ top: location.y, left: location.x }}>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button
            type="button"
            className="relative w-12 h-12 bg-white rounded-full grid place-items-center text-text before:absolute before:-top-4 before:-left-4 before:p-4 before:bg-hotspot-shadow before:w-full before:h-full before:box-content before:rounded-full before:animate-ping data-[state=open]:rotate-45"
          >
            <PlusIcon className="w-3 h-auto" />
          </button>
        </Dialog.Trigger>

        <Dialog.Overlay className="fixed top-0 left-0 w-screen h-screen bg-text/20" />
        <Dialog.Content className="bg-white/90 rounded-lg absolute -top-10 left-16 h-fit text-text w-[380px] p-8 z-10 backdrop-blur-sm">
          <Dialog.Title asChild>
            <h6 className="text-lg font-bold mb-4">{hotspot.heading}</h6>
          </Dialog.Title>
          <Dialog.Description>{hotspot.text}</Dialog.Description>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}
