import { client } from "@/sanity/lib/client";
import { type Announcement } from "@/types/sanity";
import { ComponentProps } from "react";
import Announcements from "./announcements";

async function getAnnouncements() {
  const sanityResult = await client.fetch<{
    announcements: Announcement[];
  }>(
    `
    {
      'announcements': *[_type == "announcement"],
    }
  `
  );

  return sanityResult;
}

type Props = Omit<ComponentProps<typeof Announcements>, "announcements">;

// Wraps Announcements client component to be able to fetch server data
export default async function AnnouncementsWrapper(props: Props) {
  const { announcements } = await getAnnouncements();
  return <Announcements announcements={announcements} {...props} />;
}
