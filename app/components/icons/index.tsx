import { ReactNode } from "react";
import Location from "./location";
import Globe from "./globe";
import Support from "./support";
import Payments from "./payments";

export interface IconProps extends React.ComponentPropsWithRef<"svg"> {}

export type TIconComponent = (props: IconProps) => ReactNode;
export const ICON_NAME_TO_COMPONENT = new Map<string, TIconComponent>([
  ["location", Location],
  ["globe", Globe],
  ["support", Support],
  ["payments", Payments],
]);
