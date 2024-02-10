import { Image } from "sanity";

export interface BestSellerItem {
  name: string;
  rating: string;
  price: number;
  variants: string[];
  images: Record<string, { normal: string; onHover: string }>;
  link: string;
  styles: Record<string, { selectVariantButton: string }>;
}

export interface ProductHotspot {
  location: {
    x: `${number}%`;
    y: `${number}%`;
  };
  heading: string;
  text: string;
}

export interface Announcement {
  text: string;
  link: string;
}

export interface NavProductLink {
  name: string;
  url: string;
  imageIcon: Image;
}

export interface Product {
  name: string;
  url: string;
  image: Image;
  price: number;
}

export type SanityArrayItem<T> = T & {
  _key: string;
};

// Add array item metadata to item coming from sanity cms
export interface SanityArray<T extends Object>
  extends Array<SanityArrayItem<T>> {}

export interface NavBarData {
  headphonesLinks: SanityArray<NavProductLink>;
  earphonesLinks: SanityArray<NavProductLink>;
  collaborationsPromoProducts: SanityArray<Product>;
  shopPromoProducts: SanityArray<Product>;
  newCollaborations: SanityArray<{ name: string; url: string }>;
  collaborationsFeaturedProduct: Product;
}

export interface HeroSlide {
  heading: string;
  subheading: string;
  image: Image;
  buttonText: string;
  buttonURL: string;
  colors: {
    backgroundGradient: string;
    buttonBackground: string;
    buttonTextColor: string;
  }
}

export interface HomePage {
  heroSlides: SanityArray<HeroSlide>;
}
