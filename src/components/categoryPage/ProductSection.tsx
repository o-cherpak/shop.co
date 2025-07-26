import type { Product } from "../../interfaces/Products";
import { Aside } from "./Aside/Aside";
import { PageNavigator } from "./PageNavigator";
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
      <div className="flex gap-8 items-start justify-center">
        <Aside />

        <div className="">
          <TitleAndFilterButton title="Casual" />

          <Products products={products} isMobile={isMobile} />
          
          <PageNavigator productsLength={products.length} isMobile={isMobile} />
        </div>
      </div>
    </section>
  );
}
