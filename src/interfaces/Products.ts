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
}


export interface ProductWithParam {
  product: Product,
  size: string,
  color: string,
  amount: number,
}