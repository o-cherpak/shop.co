import type { Product } from "../../../../interfaces/Products";
import { Card } from "./Card";

type ProductProsp = {
  products: Product[];
};

export function Cards({ products }: Readonly<ProductProsp>) {
  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-2 lg:space-x-8 xl:justify-center pb-6">
        {products.map((product: Product, i: number) => (
          <Card product={product} key={i} />
        ))}
      </div>
    </div>
  );
}
