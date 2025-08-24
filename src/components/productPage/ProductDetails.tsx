import type {Product} from "../../interfaces/Products.ts";

type ProductDetailsProps = {
  product: Product | null
}

export function ProductDetails({product}: Readonly<ProductDetailsProps>) {
  if(!product) {
    return null;
  }

  return (
    <div className="p-4 px-6 lg:px-18 space-y-1">
      <p className="text-black/80 leading-relaxed text-xl">{product.description}</p>
      <p className="text-black/60 leading-relaxed text-lg">{product.details}</p>
    </div>
  );

}