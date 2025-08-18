import {BrandSection} from "./BrandSection/BrandSection";
import {HeroSection} from "./HeroSection/HeroSection";
import {CardSection} from "./CardSection/CardSection";
import {DressStyleSection} from "./DressStyleSection/DressStyleSection";
import {CommentsSection} from "./CommentsSection/CommentsSection";
import {SubscribeSection} from "./SubscribeSection/SubscribeSection";
import {Footer} from "./Footer/Footer";
import {useProductsStore} from "../../../store/useProductsStore.ts";
import {useEffect} from "react";
import {useCommentsStore} from "../../../store/useCommentsStore.ts";

export function Main() {
  const {products, loadingProducts, fetchProducts} = useProductsStore();
  const {comments, loadingComments, fetchComments} = useCommentsStore();

  useEffect(() => {
    fetchProducts();
    fetchComments();
  }, [fetchProducts, fetchComments]);

  return (
    <main>
      <HeroSection/>

      <BrandSection/>

      {loadingProducts ? (
        <p>...Loading</p>
      ) : (
        <>
          <CardSection products={products?.slice(0, 4) || []} title="NEW ARRIVALS" sortingOption={"New products"} />
          <CardSection products={products?.reverse().slice(0, 4) || []} title="TOP SELLING" sortingOption={"Most popular"} />
        </>
      )}

      <DressStyleSection/>


      {loadingComments ? (
        <p>...Loading comments</p>
      ) : (
        <>
          <CommentsSection comments={comments?.slice(0, 5) || []}/>
        </>
      )}


      <div className="relative">
        <div className="absolute top-1/5 lg:top-1/5 h-[880px] lg:h-[460px] left-0 w-full bg-gray-200 z-0"></div>

        <div className="relative z-10">
          <SubscribeSection/>

          <Footer/>
        </div>
      </div>
    </main>
  );
}
