import { Close as DialogClose } from "@radix-ui/react-dialog";
import { ComponentPropsWithRef } from "react";
import CloseIcon from "../icons/close_icon";

export default function CloseButton(props: ComponentPropsWithRef<"button">) {
  return (
    <DialogClose asChild>
      <button {...props}>
        <CloseIcon width={24} height={24} />
      </button>
    </DialogClose>
  );
}
