import type { ProductWithParam} from "../../interfaces/Products.ts";
import {CartItem} from "./CartItem.tsx";

type CartItemsProps = {
  cart: ProductWithParam[];
}

export function CartItems({cart}: Readonly<CartItemsProps>) {

  return (
    <div>
      <h3
        style={{fontFamily: "Integral CF", fontWeight: "bold"}}
        className="text-3xl text-center pb-6"
      >
        Your cart
      </h3>

      <div>
        {cart && cart.map((item) => (
          <CartItem productWithParam={item} key={item.product.id} />
        ))}
      </div>
    </div>
  )
}