import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";
import type {Product} from "../../../interfaces/Products.ts";
import {useProductsStore} from "../../../store/useProductsStore.ts";
import {SimilarProduct} from "./SimilarProduct.tsx";

export function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const {products, fetchProducts} = useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);


  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchValue.length > 2) {
        const filteredProducts = products.filter(product =>
          product.title.toLowerCase().includes(searchValue.toLowerCase())
        );

        setSimilarProducts(filteredProducts);
      } else {
        setSimilarProducts([]);
      }
    }, 500)

    return () => {
      clearTimeout(handler);
    }

  }, [products, searchValue]);

  return (
    <form
      className="hidden lg:flex bg-gray-200 lg:min-w-sm xl:min-w-lg p-2 px-4 rounded-3xl mr-10"
    >
      <button className="hidden lg:flex text-xl items-center">
        <FontAwesomeIcon icon={faSearch} className="text-gray-500"/>
      </button>

      <div className="relative w-full mx-4">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search..."
          className="w-full px-3  rounded-xl focus:outline-none text-lg transition-all"
        />

        {similarProducts.length > 0 && (
          <ul className="absolute z-10 mt-2 bg-white shadow-lg rounded-xl overflow-hidden">
            {similarProducts.map((product) => (
              <SimilarProduct product={product} key={product.id}/>
            ))}
          </ul>
        )}
      </div>


    </form>
  );
}
