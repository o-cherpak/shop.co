import {BreadCrumbs} from "../components/categoryPage/BreadCrumbs";
import {Header} from "../components/Header/Header";
import {TopSingUp} from "../components/Header/TopSingUp";
import {ClickedProductSection} from "../components/productPage/ClickedProductSection";
import {SectionPicker} from "../components/productPage/CommentSection/SectionPicker.tsx";
import {CommentSection} from "../components/productPage/CommentSection/CommentSection.tsx";
import {useEffect, useState} from "react";
import {AlsoLike} from "../components/productPage/AlsoLike.tsx";
import type {Product} from "../interfaces/Products.ts";
import {Footer} from "../components/homepage/Main/Footer/Footer.tsx";
import {SubscribeSection} from "../components/homepage/Main/SubscribeSection/SubscribeSection.tsx";
import { useParams} from "react-router-dom";
import {useProductsStore} from "../store/useProductsStore.ts";
import {useCommentsStore} from "../store/useCommentsStore.ts";

export function ProductPage() {
  const [clickedProduct, setClickedProduct] = useState<Product | null>(null);
  const [selectedSection, setSelectedSection] = useState<"productsDetails" | "comments" | "faq">("comments");
  const {products} = useProductsStore();
  const {comments} = useCommentsStore();

  const params = useParams();


  useEffect(() => {
    const clickedProduct = products.find((product) => product.title === (params.productTitle));

    if (!clickedProduct) return;
    setClickedProduct(clickedProduct);

  }, [params.productTitle, products]);


  return (
    <div>
      <TopSingUp/>

      <Header/>


      <BreadCrumbs/>

      {clickedProduct && <ClickedProductSection product={clickedProduct}/>}

      <SectionPicker selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>

      {selectedSection == "comments" && <CommentSection comments={comments}/>}

      <AlsoLike products={products}/>

      <div className="relative">
        <div className="absolute top-1/5 lg:top-1/5 h-[880px] lg:h-[460px] left-0 w-full bg-gray-200 z-0"></div>

        <div className="relative z-10">
          <SubscribeSection/>

          <Footer/>
        </div>
      </div>
    </div>
  );
}
