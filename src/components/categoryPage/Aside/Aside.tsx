import {faClose, faFilterCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {DressType} from "./DressType";
import {PriceRange} from "./PriceRange";
import {Colors} from "./Colors";
import {Size} from "./Size";
import {DressStyle} from "./DressStyle";
import {useEffect} from "react";
import type {Product} from "../../../interfaces/Products.ts";
import {useFilteredProductsStore} from "../../../store/useFilteredProductsStore.ts";

type AsideProps = {
  isFilterButtonClicked: boolean;
  onClose: (val: boolean) => void;
  setFilteredProducts: (products: Product[]) => void;
  products: Product[];
};

export function Aside({isFilterButtonClicked, onClose, setFilteredProducts, products}: Readonly<AsideProps>) {

  const {type, colors, sizes, style, priceRange, resetFilters} = useFilteredProductsStore();

  useEffect(() => {
    console.log("Current sizes:", sizes);
  }, [sizes]);

  useEffect(() => {
    if (isFilterButtonClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isFilterButtonClicked]);

  const handleCloseFilter = () => {
    onClose(false);
  };

  const handleFilterButtonClick = () => {
    const filteredProducts = products
      .filter(product => !type || product.type[0] === type)
      .filter(product => colors.length === 0 || product.colors.some(c => colors.includes(c)))
      .filter(product => sizes.length === 0 || product.size.some(s => sizes.includes(s)))
      .filter(product => !style || product.type[1] === style)
      .filter(product => product.priceWithDiscount > priceRange[0] && product.priceWithDiscount < priceRange[1]);

    window.scrollTo({top: 0, behavior: "smooth"});
    setFilteredProducts(filteredProducts);
  };

  return (
    <aside
      className={`${
        isFilterButtonClicked ? "flex fixed" : "hidden"
      } bg-white h-screen overflow-y-auto top-0 right-0 z-50 pt-4 lg:pt-0 lg:flex flex-col w-full lg:w-1/4 border-2 border-gray-300 lg:h-full px-4 py-2 rounded-xl gap-4`}
    >
      <div
        className="pt-4 flex w-full justify-between items-center pb-4
        relative after:absolute after:left-0 after:bottom-0 after:content-[''] after:w-full after:h-[1px]
        after:bg-gray-300 after:block after:m-0 after:p-0">
        <h4 className="font-semibold text-xl">Filter</h4>

        {isFilterButtonClicked ? (
          <button onClick={handleCloseFilter} className="text-lg">
            <FontAwesomeIcon icon={faClose}/>
          </button>
        ) : (
          <span
            className="text-black/60 cursor-pointer transition duration-300 hover:text-black/80">
            <FontAwesomeIcon
              icon={faFilterCircleXmark}
              title="Reset filter"
              onClick={() => resetFilters(products)}
            />
          </span>
        )}
      </div>

      <DressType/>

      <PriceRange/>

      <Colors/>

      <Size/>

      <DressStyle/>

      <button
        className="bg-black mt-4 w-full text-white rounded-3xl p-3 mb-2 hover:cursor-pointer
        hover:bg-black/80 duration-200 transition-all"
        onClick={handleFilterButtonClick}

      >
        Apply Filter
      </button>
    </aside>
  );
}
