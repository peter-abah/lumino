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
            className="relative w-8 md:w-12 aspect-square bg-white rounded-full grid place-items-center text-text before:absolute before:-top-2 md:before:-top-4 md:before:-left-4 before:-left-2 before:p-2 md:before:p-4 before:bg-hotspot-shadow before:w-full before:h-full before:box-content before:rounded-full before:animate-ping data-[state=open]:rotate-45"
          >
            <PlusIcon className="w-2 md:w-3 h-auto" />
          </button>
        </Dialog.Trigger>

        <Dialog.Overlay className="fixed top-0 left-0 w-screen h-screen bg-text/20" />
        <Dialog.Content className="fixed bottom-0 lg:bottom-auto left-0 p-2 lg:absolute lg:-top-10 lg:left-16 h-fit w-full lg:w-[380px] lg:p-0 z-10">
          <div className="p-6 lg:p-8 backdrop-blur-sm bg-white lg:bg-white/90 rounded-lg text-text">
            <Dialog.Title asChild>
              <h6 className="md:text-lg font-bold mb-4">{hotspot.heading}</h6>
            </Dialog.Title>
            <Dialog.Description className="text-sm md:text-base leading-normal">{hotspot.text}</Dialog.Description>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}
