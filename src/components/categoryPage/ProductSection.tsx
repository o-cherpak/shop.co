import {useMemo, useState} from "react";
import type {Product} from "../../interfaces/Products";
import {Aside} from "./Aside/Aside";
import {PageNavigator} from "./PageNavigator";
import {Products} from "./Products";
import {TitleAndFilterButton} from "./TitleAndFilterButton";
import type {CustomCommentInterface} from "../../interfaces/Comments.ts";

type ProductSectionProps = {
  products: Product[];
  comments: CustomCommentInterface[];
  isMobile?: boolean;
};

export function ProductSection({products, isMobile, comments}: Readonly<ProductSectionProps>) {
  const [isFilterButtonClicked, setIsFilterButtonClicked] = useState(false);
  const [sortOption, setSortOption] = useState("Default");

  const handleFilterState = (val: boolean) => {
    setIsFilterButtonClicked(val);
  };

  const sortedProducts = useMemo(() => {
    const sorted = [...products];

    switch (sortOption) {
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
  }, [comments, products, sortOption]);

  return (
    <section
      className={`lg:px-24 ${
        isFilterButtonClicked ? "px-0" : "px-2"
      } flex flex-col gap-8`}
    >
      <div className="flex gap-8 items-start justify-center">
        <Aside isFilterButtonClicked={isFilterButtonClicked} onClose={handleFilterState}/>

        <div className="">
          <TitleAndFilterButton
            title="Casual"
            isMobile={isMobile}
            onFilterClick={handleFilterState}
            onSortChange={setSortOption}
            currentSort={sortOption}
          />

          <Products
            products={sortedProducts}
          />

          <PageNavigator productsLength={products.length}/>
        </div>
      </div>
    </section>
  );
}
