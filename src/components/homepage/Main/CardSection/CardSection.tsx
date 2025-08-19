import type { Product } from "../../../../interfaces/Products";
import { Cards } from "./Cards";
import {Link} from "react-router-dom";
import {useSortingStore} from "../../../../store/useSortingStore.ts";
import {hoverBgColor} from "../../../../constants/colors.ts";

type NewArrivalsSectionProps = {
  products: Product[];
  title: string;
  sortingOption?: string;
};

export function CardSection({ products, title, sortingOption }: Readonly<NewArrivalsSectionProps>) {
  const {setSortingOption} = useSortingStore();

  return (
    <section className="pt-12">
      <h2
        style={{ fontFamily: "Integral CF", fontWeight: "bold" }}
        className="text-4xl text-center pb-6"
      >
        {title}
      </h2>

      <Cards products={products} />

      <div className="flex justify-center">
        <Link to={"/CategoryPage"} onClick={() => sortingOption && setSortingOption(sortingOption)}>
          <button
            className={`mt-1 w-full max-w-xs md:max-w-[200px] border border-black/40 p-2 px-6 
              rounded-3xl shadow-2xl cursor-pointer hover:scale-110 
              hover:${hoverBgColor} hover:text-white transition-all duration-500 ease active:scale-40 hover:border-white`}>

            View All
          </button>
        </Link>
      </div>
    </section>
  );
}
