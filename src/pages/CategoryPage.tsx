import { useCallback, useEffect, useState } from "react";
import { BreadCrumbs } from "../components/categoryPage/BreadCrumbs";
import { ProductSection } from "../components/categoryPage/ProductSection";
import { Header } from "../components/Header/Header";
import { TopSingUp } from "../components/Header/TopSingUp";
import { getAllProducts } from "../services/getProdutcs.ts";
import type { Product } from "../interfaces/Products";
import { SubscribeSection } from "../components/homepage/Main/SubscribeSection/SubscribeSection";
import { Footer } from "../components/homepage/Main/Footer/Footer";
import {getComments} from "../services/getCommets.ts";
import type {CustomCommentInterface} from "../interfaces/Comments.ts";

export function CategoryPage() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [comments, setComments] = useState<CustomCommentInterface[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const fetch = useCallback(async () => {
    const products = await getAllProducts();
    const comments = await  getComments();

    setProducts(products);
    setComments(comments);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

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
          <ProductSection products={products} comments={comments} isMobile={isMobile} />
        ) : (
          <p>...Loading products</p>
        )}
      </div>

      <SubscribeSection />

      <Footer />
    </div>
  );
}
