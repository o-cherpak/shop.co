export interface Product {
  title: string;
  description: string;
  type: string[];
  price: number;
  discount: number;
  priceWithDiscount: number;
  colors: string[];
  size: string[];
  commentsId: number[];
}

export interface ProductList {
  products: Product[];
}
