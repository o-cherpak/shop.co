import { useCallback, useEffect, useState } from "react";
import { BrandSection } from "./BrandSection/BrandSection";
import { HeroSection } from "./HeroSection/HeroSection";
import { CardSection } from "./CardSection.tsx/CardSection";
import { getAllProducts } from "../../../services/getAllProdutcs";
import type { Product } from "../../../interfaces/Products";
import type { CustomComment } from "../../../interfaces/Comments";
import { DressStyleSection } from "./DressStyleSection/DressStyleSection";
import { CommentsSection } from "./CommentsSection/CommentsSection";
import { getComments } from "../../../services/getCommets";
import { SubscribeSection } from "./SubscribeSection/SubscribeSection";

export function Main() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [comments, setComments] = useState<CustomComment[] | null>(null);

  const fetchProducts = useCallback(async () => {
    const data = await getAllProducts();

    setProducts(data);
  }, []);

  const fetchComments = useCallback(async () => {
    const data = await getComments();

    setComments(data);
  }, []);

  useEffect(() => {
    fetchProducts();
    fetchComments();
  }, [fetchProducts, fetchComments]);

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

      {comments ? (
        <CommentsSection comments={comments.slice(0, 5)} />
      ) : (
        <p>...Loading comments</p>
      )}

      <SubscribeSection />
    </main>
  );
}
