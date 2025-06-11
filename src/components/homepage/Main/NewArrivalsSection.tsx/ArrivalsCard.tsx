import type { Product } from "../../../../interfaces/Products";

type ArrivalsCardprops = {
  product: Product;
};

export function ArrivalsCard({ product }: Readonly<ArrivalsCardprops>) {
  return <h1>{product.title}</h1>;
}
