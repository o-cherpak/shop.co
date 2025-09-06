import type {Product} from "../../interfaces/Products";
import {Card} from "../homepage/Main/CardSection/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFaceFrown} from "@fortawesome/free-solid-svg-icons";
import {useProductsStore} from "../../store/useProductsStore.ts";

type ProductsProps = {
  products: Product[];
  isMobile?: boolean;
  startDisplayedItem : number;
  endDisplayedItem: number;
};

export function Products({products, startDisplayedItem , endDisplayedItem}: Readonly<ProductsProps>) {
  const {isLoadingProducts} = useProductsStore();

  return (
    <>
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(startDisplayedItem, endDisplayedItem).map((product) => (
            <Card product={product} showDiscount key={product.id}/>
          ))}
        </div>
      ) : (
        !isLoadingProducts &&
        <div className="flex flex-col items-center justify-center mx-14 py-24 text-black/60 lg:w-4xl">
          <FontAwesomeIcon
            icon={faFaceFrown}
            className="text-6xl lg:text-8xl mb-3"
          />
          <p className="text-2xl lg:text-3xl font-semibold">No products found</p>

          <p className="text-lg lg:text-xl text-center">
            Try adjusting your filters to find what you’re looking for.
          </p>
        </div>
      )}
    </>
  );
}
