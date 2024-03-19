import { client } from "@/sanity/lib/client";
import { type InfoPanel as TInfoPanel } from "@/types/sanity";
import { ComponentProps } from "react";
import InfoPanel from "./info_panel";

async function getInfoPanelData() {
  const { infoPanel } = await client.fetch<{
    infoPanel: TInfoPanel;
  }>(
    `
    {
      'infoPanel': *[_type == "infoPanel"][0],
    }
  `
  );

  return infoPanel;
}

type Props = Omit<ComponentProps<typeof InfoPanel>, "data">;

export default async function NavBarWrapper(props: Props) {
  const infoPanel = await getInfoPanelData();
  return <InfoPanel data={infoPanel} {...props} />;
}
