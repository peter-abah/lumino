import { Image, PortableTextBlock } from "sanity";

export interface ImageWithAlt extends Image {
  alt?: string;
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
  link?: string;
  _id: string;
}

export interface LinkWithIcon {
  name: string;
  url: string;
  imageIcon: ImageWithAlt;
}

export interface InfoPanel {
  infoList: SanityArray<{
    iconID?: string;
    heading: string;
    content: string;
  }>;
}

export interface Product {
  name: string;
  url: string;
  image: ImageWithAlt;
  price: number;
}

export interface ImageLink {
  name: string;
  url: string;
  image: ImageWithAlt;
  colors?: {
    textColor?: string;
    background?: string;
  };
}

export interface Spotlight {
  spotlightText: string;
  subheading: string;
  content: string;
  buttonText?: string;
  buttonURL?: string;
  image: ImageWithAlt;
}

export interface Quote {
  quote: string;
  logo: ImageWithAlt;
}

export interface Hotspot {
  heading: string;
  content: string;
  xPosition: number;
  yPosition: number;
  xPositionMobile: number;
  yPositionMobile: number;
}

export interface FeatureChart {
  heading: string;
  subheading: string;
  content: string;
  buttonText: string;
  buttonURL: string;
  headings: Array<string>;
  valuesColumns: SanityArray<{
    productSKU?: string;
    array: Array<string>;
  }>;
}

export interface TimelineSlide {
  heading: string;
  subheading: string;
  content?: string;
  navLabel: string;
  image: ImageWithAlt;
}

export interface Timeline extends SanityArray<TimelineSlide> {}

export interface Newsletter {
  title: string;
}

export interface Menu {
  title: string;
  links: SanityArray<{
    name: string;
    url: string;
  }>;
}

export type SanityArrayItem<T> = T & {
  _key: string;
};

// Add array item metadata to item coming from sanity cms
export interface SanityArray<T extends Object> extends Array<SanityArrayItem<T>> {}

export interface NavBar {
  headphonesLinks: SanityArray<LinkWithIcon>;
  earphonesLinks: SanityArray<LinkWithIcon>;
  collaborationsPromoProducts: SanityArray<ImageLink>;
  shopPromoProducts: SanityArray<ImageLink>;
  newCollaborations: SanityArray<{ name: string; url: string }>;
}

export interface HeroSlide {
  heading: string;
  subheading: string;
  image: ImageWithAlt;
  buttonText: string;
  buttonURL: string;
  colors: {
    backgroundGradient: string;
    buttonBackground: string;
    buttonTextColor: string;
  };
}

export interface HomePage {
  heroSlides: SanityArray<HeroSlide>;
  imageLinks: SanityArray<ImageLink>;
  scrollingText: string;
  collectionList: SanityArray<ImageLink>;
  spotlight: Spotlight;
  mediaGrid: SanityArray<ImageLink>;
  compareSection: {
    heading: string;
    subheading: string;
    content: string;
    beforeText: string;
    beforeImage: ImageWithAlt;
    afterText: string;
    afterImage: ImageWithAlt;
  };
  press: SanityArray<Quote>;
  hotspots: {
    heading: string;
    content: string;
    buttonText: string;
    buttonURL: string;
    image: ImageWithAlt;
    mobileImage: ImageWithAlt;
    hotspots: SanityArray<Hotspot>;
  };
  twoColumnSpotlight: [SanityArrayItem<Spotlight>, SanityArrayItem<Spotlight>];
  textWithMultipleImages: SanityArray<{
    heading: string;
    subheading: string;
    content: string;
    image: ImageWithAlt;
  }>;
  featureChart: FeatureChart;
  revealedImageOnScroll: {
    image: ImageWithAlt;
    heading: string;
    subheading: string;
  };
  timeline: Timeline;
  faq: {
    heading: string;
    subheading?: string;
    content: string;
    supportOperatingHoursText: string;
    avgResponseTimeText: string;
    teamAvatar: ImageWithAlt;
    questions: SanityArray<{
      question: string;
      answer: string;
    }>;
  };
}

export interface Footer {
  newsletter: Newsletter;
  menus: SanityArray<Menu>;
  copywright: PortableTextBlock[];
}
export interface SocialLink {
  _id: string;
  name: string;
  url: string;
  iconID: string;
}
