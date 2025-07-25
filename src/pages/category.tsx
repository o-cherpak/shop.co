import { useCallback, useEffect, useState } from "react";
import { BreadCrumbs } from "../components/categoryPage/BreadCrumbs";
import { ProductSection } from "../components/categoryPage/ProductSection";
import { Header } from "../components/Header/Header";
import { TopSingUp } from "../components/Header/TopSingUp";
import { getAllProducts } from "../services/getAllProdutcs";
import type { Product } from "../interfaces/Products";
import { PageNavigator } from "../components/categoryPage/PageNavigator";

export function Category() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const fetchProducts = useCallback(async () => {
    const data = await getAllProducts();

    setProducts(data);
  }, []);

  useEffect(() => {
    const IsDisplayMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    IsDisplayMobile();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      <TopSingUp />

      <Header />

      <BreadCrumbs />

      <div>
        {products ? (
          <ProductSection products={products} isMobile={isMobile} />
        ) : (
          <p>...Loading products</p>
        )}

        {products && (
          <PageNavigator
            productsLength={products?.length}
            isMobile={isMobile}
          />
        )}
      </div>
    </div>
  );
}
