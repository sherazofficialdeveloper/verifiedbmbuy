
export interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  hoverImage?: string;
  categories: string[];
  price: number;
  oldPrice?: number;
  priceRange?: string; // For variable products like 28551
  rating: number;
  description: string;
  saleLabel?: string;
  soldOut?: boolean;
  sku: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

/**
 * Props for the InfoBox component used in the app.
 */
export interface InfoBoxProps {
  icon: string;
  title: string;
  content: string;
}
