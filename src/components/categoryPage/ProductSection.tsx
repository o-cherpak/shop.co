import { useState } from "react";
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
  const [isFilterButtonClicked, setIsFilterButtonClicked] = useState(false);

  const handleFilterState = (val: boolean) => {
    setIsFilterButtonClicked(val);
  };

  return (
    <section
      className={`lg:px-24 ${
        isFilterButtonClicked ? "px-0" : "px-2"
      } flex flex-col gap-8`}
    >
      <div className="flex gap-8 items-start justify-center">
        <Aside isFilterButtonClicked={isFilterButtonClicked} onClose={handleFilterState} />

        <div className="">
          <TitleAndFilterButton
            title="Casual"
            isMobile={isMobile}
            onFilterClick={handleFilterState}
          />

          <Products
            products={products}
          />

          <PageNavigator productsLength={products.length} />
        </div>
      </div>
    </section>
  );
}
