import { useCallback, useEffect, useState } from "react";
import { BrandSection } from "./BrandSection/BrandSection";
import { HeroSection } from "./HeroSection/HeroSection";
import { NewArrivalsSection } from "./NewArrivalsSection.tsx/NewArrivalsSection";
import { getAllProducts } from "../../../services/getAllProdutcs";
import type { ProductList } from "../../../interfaces/Products";

export function Main() {
  const [products, setProducts] = useState<ProductList | null>(null);

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
        <NewArrivalsSection newProducts={products.products.slice(0, 5)} />
      ) : (
        <p>...Loading</p>
      )}
    </main>
  );
}
