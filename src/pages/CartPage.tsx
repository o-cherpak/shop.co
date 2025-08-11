import {BreadCrumbs} from "../components/categoryPage/BreadCrumbs.tsx";
import {TopSingUp} from "../components/Header/TopSingUp.tsx";
import {Header} from "../components/Header/Header.tsx";
import {CartItems} from "../components/cartPage/CartItems.tsx";
import {useEffect, useState} from "react";
import type {ProductWithParam} from "../interfaces/Products.ts";

export function CartPage() {
  const [cart, setCart] = useState<ProductWithParam[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("cartItems");
    setCart(storedData ? JSON.parse(storedData) : []);
  }, []);

  return (
    <section>
      <TopSingUp/>

      <Header/>

      <BreadCrumbs/>

      <CartItems cart={cart}/>
    </section>
  )
}