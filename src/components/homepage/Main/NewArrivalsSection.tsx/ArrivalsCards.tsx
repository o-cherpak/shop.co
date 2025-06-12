import type { Product } from "../../../../interfaces/Products";
import { ArrivalsCard } from "./ArrivalsCard";

type ProductProsp = {
  products: Product[];
};

export function ArrivalsCards({ products }: Readonly<ProductProsp>) {
  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-2 lg:space-x-8 xl:justify-center pb-6">
        {products.map((product: Product, i: number) => (
          <ArrivalsCard product={product} key={i} />
        ))}
      </div>
    </div>
  );
}
