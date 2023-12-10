export interface BestSellerItem {
  name: string;
  rating: string;
  price: number;
  variants: string[];
  images: Record<string, { normal: string; onHover: string }>;
  link: string;
  styles: Record<string, { selectVariantButton: string }>;
}
