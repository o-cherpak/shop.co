import { useCallback, useEffect, useState } from "react";
import { BrandSection } from "./BrandSection/BrandSection";
import { HeroSection } from "./HeroSection/HeroSection";
import { CardSection } from "./CardSection.tsx/CardSection";
import { getAllProducts } from "../../../services/getAllProdutcs";
import type { Product } from "../../../interfaces/Products";
import { DressStyleSection } from "./DressStyleSection/DressStyleSection";

export function Main() {
  const [products, setProducts] = useState<Product[] | null>(null);

  const fetchProducts = useCallback(async () => {
    const data = await getAllProducts();
    console.log(data);

    setProducts(data);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <main>
      <HeroSection />

      <BrandSection />

      {products ? (
        <CardSection products={products.slice(0, 4)} title="NEW ARRIVALS" />
      ) : (
        <p>...Loading</p>
      )}

      {products ? (
        <CardSection products={products.slice(4, 8)} title="TOP SELLING" />
      ) : (
        <p>...Loading</p>
      )}

      <DressStyleSection />
    </main>
  );
}
