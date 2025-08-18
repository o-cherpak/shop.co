import {useEffect, useMemo, useState} from "react";
import type {Product} from "../../interfaces/Products";
import {Aside} from "./Aside/Aside";
import {PageNavigator} from "./PageNavigator";
import {Products} from "./Products";
import {TitleAndFilterButton} from "./TitleAndFilterButton";
import type {CustomCommentInterface} from "../../interfaces/Comments.ts";
import {useFilteredProductsStore} from "../../store/useFilteredProductsStore.ts";
import {useSortingStore} from "../../store/useSortingStore.ts";

type ProductSectionProps = {
  products: Product[];
  comments: CustomCommentInterface[];
  isMobile?: boolean;
};

export function ProductSection({products, isMobile, comments}: Readonly<ProductSectionProps>) {
  const [isFilterButtonClicked, setIsFilterButtonClicked] = useState(false);
  const {sortingOption, setSortingOption} = useSortingStore();
  const {filteredProducts, setFilteredProducts} = useFilteredProductsStore();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth", duration: 300 });
  }, [sortingOption]);

  const handleFilterState = (val: boolean) => {
    setIsFilterButtonClicked(val);
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products, setFilteredProducts]);

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];

    switch (sortingOption) {
      case "Most popular":
        sorted.sort((a, b) => {
          const countA = comments.filter(c => c.itemId === a.id).length;
          const countB = comments.filter(c => c.itemId === b.id).length;

          return countB - countA;
        });
        break;
      case "From min price":
        sorted.sort((productA, productB) => productA.priceWithDiscount - productB.priceWithDiscount);
        break;
      case "From max price":
        sorted.sort((productA, productB) => productB.priceWithDiscount - productA.priceWithDiscount);
        break;
      case "New products":
        sorted.reverse();
        break;
      default:
        break;
    }
    return sorted;
  }, [comments, filteredProducts, sortingOption]);

  return (
    <section
      className={`lg:px-24 ${
        isFilterButtonClicked ? "px-0" : "px-2"
      } flex flex-col gap-8`}
    >
      <div className="flex gap-8 items-start justify-center">
        <Aside
          isFilterButtonClicked={isFilterButtonClicked}
          onClose={handleFilterState}
          products={products}
          setFilteredProducts={setFilteredProducts}
        />

        <div className="">
          <TitleAndFilterButton
            title="Casual"
            isMobile={isMobile}
            onFilterClick={handleFilterState}
            onSortChange={setSortingOption}
            currentSort={sortingOption }
          />

          <Products
            products={sortedProducts}
          />


          {filteredProducts.length > 11 && <PageNavigator productsLength={products.length}/>}
        </div>
      </div>
    </section>
  );
}
