import { type Announcement as TAnnouncement } from "@/types/sanity";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type Props = {
  announcement: TAnnouncement;
  isVisible: boolean;
};
export default function Announcement({ announcement, isVisible }: Props) {
  return (
    <Link
      href={announcement.link}
      className={twMerge(
        "text-xs font-bold text-center w-full opacity-0 invisible row-start-1 row-span-1 col-start-1 col-span-1 transition-all duration-1000 -translate-3",
        isVisible && "opacity-100 visible translate-y-0"
      )}
    >
      {announcement.text}
    </Link>
  );
}
