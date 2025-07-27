import type { Product } from "../../interfaces/Products";
import { Images } from "./Images";

type ClickedProductSectionProps = {
  product: Product;
};

export function ClickedProductSection({
  product,
}: Readonly<ClickedProductSectionProps>) {
  return (
    <section className="">
      <Images productId={product.id} />
    </section>
  );
}
