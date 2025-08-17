import {useEffect, useState} from "react";
import {BreadCrumbs} from "../components/categoryPage/BreadCrumbs";
import {ProductSection} from "../components/categoryPage/ProductSection";
import {Header} from "../components/Header/Header";
import {TopSingUp} from "../components/Header/TopSingUp";
import {SubscribeSection} from "../components/homepage/Main/SubscribeSection/SubscribeSection";
import {Footer} from "../components/homepage/Main/Footer/Footer";
import {useProductsStore} from "../store/useProductsStore.ts";
import {useCommentsStore} from "../store/useCommentsStore.ts";


export function CategoryPage() {
  const [isMobile, setIsMobile] = useState(false);
  const {products, loadingProducts} = useProductsStore();
  const {comments, loadingComments} = useCommentsStore();

  useEffect(() => {
    const IsDisplayMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    IsDisplayMobile();
  }, []);


  return (
    <div className="relative">
      <TopSingUp/>

      <Header/>

      <BreadCrumbs/>

      <div>
        {(loadingProducts && loadingComments) ? (
          <p>...Loading products</p>
        ) : (
          <ProductSection products={products} comments={comments} isMobile={isMobile}/>
        )}
      </div>

      <SubscribeSection/>

      <Footer/>
    </div>
  );
}
