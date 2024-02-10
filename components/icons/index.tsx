import { ReactNode } from "react";
import Location from "./location";
import Globe from "./globe";
import Support from "./support";
import Payments from "./payments";
import { nullFunction } from "@/helpers";
import Facebook from "./facebook";
import Twitter from "./twitter";
import Instagram from "./instagram";
import Youtube from "./youtube";
import Spotify from "./spotify";

import VisaCard from "./visa_card";
import Mastercard from "./mastercard";
import AmexCard from "./amex_card";
import PaypalCard from "./paypal_card";
import DinersCard from "./diners_card";
import DiscoverCard from "./discover_card";

export interface IconProps extends React.ComponentPropsWithRef<"svg"> {}

export type TIconComponent = (props: IconProps) => ReactNode;
export const ICON_NAME_TO_COMPONENT = new Map<string, TIconComponent>([
  ["location", Location],
  ["globe", Globe],
  ["support", Support],
  ["payments", Payments],
  ["facebook", Facebook],
  ["twitter", Twitter],
  ["instagram", Instagram],
  ["youtube", Youtube],
  ["spotify", Spotify],
  ["visa-card", VisaCard],
  ["mastercard", Mastercard],
  ["amex-card", AmexCard],
  ["paypal-card", PaypalCard],
  ["diners-card", DinersCard],
  ["discover-card", DiscoverCard],
]);

interface IconComponentProps extends IconProps {
  name: string;
}
export function IconComponent({ name, ...iconProps }: IconComponentProps) {
  const Component = ICON_NAME_TO_COMPONENT.get(name) || nullFunction;

  return <Component {...iconProps} />;
}