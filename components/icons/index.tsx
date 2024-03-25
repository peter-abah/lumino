import { nullFunction } from "@/lib";
import { ReactNode } from "react";
import Facebook from "./facebook";
import Globe from "./globe";
import Instagram from "./instagram";
import Location from "./location";
import Payments from "./payments";
import Spotify from "./spotify";
import Support from "./support";
import Twitter from "./twitter";
import Youtube from "./youtube";

import AmexCard from "./amex_card";
import DefaultIcon from "./default_icon";
import DinersCard from "./diners_card";
import DiscoverCard from "./discover_card";
import Github from "./github";
import Linkedin from "./linkedin";
import Mastercard from "./mastercard";
import PaypalCard from "./paypal_card";
import VisaCard from "./visa_card";
import Website from "./website";

export interface IconProps extends React.ComponentPropsWithRef<"svg"> {}

export type TIconComponent = (props: IconProps) => ReactNode;
export const ICON_NAME_TO_COMPONENT = new Map<string, TIconComponent>([
  ["location", Location],
  ["world", Globe],
  ["support", Support],
  ["card", Payments],
  ["facebook", Facebook],
  ["twitter", Twitter],
  ["instagram", Instagram],
  ["youtube", Youtube],
  ["spotify", Spotify],
  ["github", Github],
  ["website", Website],
  ["linkedin", Linkedin],
  ["visa-card", VisaCard],
  ["mastercard", Mastercard],
  ["amex-card", AmexCard],
  ["paypal-card", PaypalCard],
  ["diners-card", DinersCard],
  ["discover-card", DiscoverCard],
]);

interface IconComponentProps extends IconProps {
  name: string;
  useDefaultIcon?: boolean;
}
export function IconComponent({ name, useDefaultIcon, ...iconProps }: IconComponentProps) {
  let Component = ICON_NAME_TO_COMPONENT.get(name);
  if (!Component) {
    Component = useDefaultIcon ? DefaultIcon : nullFunction;
  }

  return <Component {...iconProps} />;
}
