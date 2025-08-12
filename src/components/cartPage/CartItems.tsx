import type {ProductWithParam} from "../../interfaces/Products.ts";
import {CartItem} from "./CartItem.tsx";

type CartItemsProps = {
  cart: ProductWithParam[];
}

export function CartItems({cart}: Readonly<CartItemsProps>) {

  return (
    <div className={"px-4 mb-4"}>
      <h3
        style={{fontFamily: "Integral CF", fontWeight: "bold"}}
        className="text-3xl text-center pb-6"
      >
        Your cart
      </h3>

      <div className={"flex flex-col gap-4 border border-gray-200 rounded-2xl py-6 px-2"}>
        {cart && cart.map((item, index) => (
          <CartItem productWithParam={item} key={index}/>
        ))}
      </div>
    </div>
  )
}