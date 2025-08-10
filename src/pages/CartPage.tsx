import {BreadCrumbs} from "../components/categoryPage/BreadCrumbs.tsx";
import {TopSingUp} from "../components/Header/TopSingUp.tsx";
import {Header} from "../components/Header/Header.tsx";
import {CartItems} from "../components/cartPage/CartItems.tsx";

export function CartPage() {
  return (
    <section>
      <TopSingUp/>

      <Header/>

      <BreadCrumbs/>

      <CartItems cart={cart}/>
    </section>
  )
}