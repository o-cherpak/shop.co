import type { Product } from "../../interfaces/Products";
import { Aside } from "./Aside/Aside";
import { Products } from "./Products";
import { TitleAndFilterButton } from "./TitleAndFilterButton";

type ProductSectionProps = {
  products: Product[];
  isMobile?: boolean;
};

export function ProductSection({
  products,
  isMobile,
}: Readonly<ProductSectionProps>) {
  return (
    <section className="lg:px-24 px-2 flex flex-col gap-8">
      <TitleAndFilterButton title="Casual" />

      <div className="flex gap-6 items-center justify-center">
        <Aside />

        <Products products={products} isMobile={isMobile} />
      </div>
    </section>
  );
}
