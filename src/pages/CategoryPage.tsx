import { useCallback, useEffect, useState } from "react";
import { BreadCrumbs } from "../components/categoryPage/BreadCrumbs";
import { ProductSection } from "../components/categoryPage/ProductSection";
import { Header } from "../components/Header/Header";
import { TopSingUp } from "../components/Header/TopSingUp";
import { getAllProducts } from "../services/getAllProdutcs";
import type { Product } from "../interfaces/Products";
import { SubscribeSection } from "../components/homepage/Main/SubscribeSection/SubscribeSection";
import { Footer } from "../components/homepage/Main/Footer/Footer";

export function CategoryPage() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const fetchProducts = useCallback(async () => {
    const data = await getAllProducts();

    setProducts(data);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    const IsDisplayMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    IsDisplayMobile();
  }, []);


  return (
    <div className="relative">
      <TopSingUp />

      <Header />

      <BreadCrumbs />

      <div>
        {products ? (
          <ProductSection products={products} isMobile={isMobile} />
        ) : (
          <p>...Loading products</p>
        )}
      </div>

      <SubscribeSection />

      <Footer />
    </div>
  );
}
