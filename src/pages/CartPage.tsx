import {BreadCrumbs} from "../components/categoryPage/BreadCrumbs.tsx";
import {TopSingUp} from "../components/Header/TopSingUp.tsx";
import {Header} from "../components/Header/Header.tsx";
import {CartItems} from "../components/cartPage/CartItems.tsx";
import {OrderSummary} from "../components/cartPage/OrderSummary.tsx";
import {SubscribeSection} from "../components/homepage/Main/SubscribeSection/SubscribeSection.tsx";
import {Footer} from "../components/homepage/Main/Footer/Footer.tsx";
import {useCartStore} from "../store/useCartStore.ts";
import {useEffect} from "react";

export function CartPage() {
  const {cart, fetchCart} = useCartStore();

  useEffect(() => {
    fetchCart()
  }, [fetchCart]);

  return (
    <section>
      <TopSingUp/>

      <Header/>

      <div className={"lg:pl-6"}>
        <BreadCrumbs/>
      </div>

      <div className={"flex flex-col lg:flex-row w-full justify-center"}>
        <CartItems cart={cart}/>

        <OrderSummary productsWithParam={cart}/>
      </div>

      <div className="relative">
        <div className="absolute top-1/5 lg:top-1/5 h-[880px] lg:h-[460px] left-0 w-full bg-gray-200 z-0"></div>

        <div className="relative z-10">
          <SubscribeSection/>

          <Footer/>
        </div>
      </div>
    </section>
  )
}