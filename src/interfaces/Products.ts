export interface Product {
  title: string;
  description: string;
  type: string[];
  price: number;
  discount: number;
  id: number;
  priceWithDiscount: number;
  colors: string[];
  size: string[];
  commentsId: number[];
}