import { useCallback, useEffect, useState } from "react";
import { BreadCrumbs } from "../components/categoryPage/BreadCrumbs";
import { ProductSection } from "../components/categoryPage/ProductSection";
import { Header } from "../components/Header/Header";
import { TopSingUp } from "../components/Header/TopSingUp";
import { getAllProducts } from "../services/getAllProdutcs";
import type { Product } from "../interfaces/Products";

export function Category() {
  const [products, setProducts] = useState<Product[] | null>(null);

  const fetchProducts = useCallback(async () => {
    const data = await getAllProducts();

    setProducts(data);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <TopSingUp />

      <Header />
      
      <BreadCrumbs />

      {products ? (
        <ProductSection products={products} />
      ) : (
        <p>...Loading products</p>
      )}
    </>
  );
}
