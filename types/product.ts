export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  rating: number;
  reviewCount: number;
  isFull: boolean;
  isFreeShipping: boolean;
}
