import type { Product } from "../../interfaces/Products";
import { Card } from "../homepage/Main/CardSection/Card";

type ProductsProps = {
  products: Product[];
  isMobile?: boolean;
};

export function Products({ products }: Readonly<ProductsProps>) { 

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card product={product} showDiscount key={product.id} />
      ))}
    </div>
  );
}
