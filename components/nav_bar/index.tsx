import { getProducts } from "@/lib/shopify";
import { client } from "@/sanity/lib/client";
import { type NavBar as INavBar } from "@/types/sanity";
import { Maybe, Product } from "@/types/shopify";
import { ComponentProps } from "react";
import NavBar from "./nav_bar";

async function getNavBarData() {
  const { navBarData } = await client.fetch<{
    navBarData: INavBar;
  }>(
    `
    {
      'navBarData': *[_type == "navBarData"][0],
    }
  `
  );

  const collaborationsFeaturedProduct = (
    await getProducts({ query: "tag:collaborations-featured-product" })
  )[0] as Maybe<Product>;

  return {
    navBarData: { ...navBarData, collaborationsFeaturedProduct },
  };
}

type Props = Omit<ComponentProps<typeof NavBar>, "data">;
export default async function NavBarWrapper(props: Props) {
  const { navBarData } = await getNavBarData();

  return <NavBar data={navBarData} {...props} />;
}
