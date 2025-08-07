import {BreadCrumbs} from "../components/categoryPage/BreadCrumbs";
import {Header} from "../components/Header/Header";
import {TopSingUp} from "../components/Header/TopSingUp";
import {ClickedProductSection} from "../components/productPage/ClickedProductSection";
import {SectionPicker} from "../components/productPage/CommentSection/SectionPicker.tsx";
import {CommentSection} from "../components/productPage/CommentSection/CommentSection.tsx";
import {useCallback, useEffect, useState} from "react";
import {getComments} from "../services/getCommets.ts";
import type {CustomCommentInterface} from "../interfaces/Comments.ts";
import {AlsoLike} from "../components/productPage/AlsoLike.tsx";
import {getAllProducts} from "../services/getAllProdutcs.ts";
import type {Product} from "../interfaces/Products.ts";
import {Footer} from "../components/homepage/Main/Footer/Footer.tsx";
import {SubscribeSection} from "../components/homepage/Main/SubscribeSection/SubscribeSection.tsx";

export function ProductPage() {
  const [comments, setComments] = useState<CustomCommentInterface[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const fetch = useCallback(async () => {
    const comments = await getComments();
    const products = await  getAllProducts()

    setComments(comments);
    setProducts(products);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);


  return (
    <div>
      <TopSingUp/>

      <Header/>


      <BreadCrumbs/>

      <ClickedProductSection
        product={{
          id: 0,
          title: "Denim Jacket",
          description: "Classic blue denim jacket for casual wear",
          type: ["Body", "casual"],
          price: 89.99,
          discount: 15,
          priceWithDiscount: 76.49,
          colors: ["blue", "black"],
          size: ["S", "M", "L", "XL"],
        }}
      />

      <SectionPicker/>

      <CommentSection comments={comments}/>

      <AlsoLike products={products} />

      <div className="relative">
        <div className="absolute top-1/5 lg:top-1/5 h-[880px] lg:h-[460px] left-0 w-full bg-gray-200 z-0" ></div>

        <div className="relative z-10">
          <SubscribeSection />

          <Footer />
        </div>
      </div>
    </div>
  );
}
