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
