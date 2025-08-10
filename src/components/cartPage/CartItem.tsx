import type {ProductWithParam} from "../../interfaces/Products.ts";

type CartItemsProps = {
  productsWithParam: ProductWithParam
}

export function CartItem({productsWithParam}: Readonly<CartItemsProps>) {
  return (
    <div>
      <div>
        <img src="" alt=""/>
      </div>

      <div>
        {productsWithParam.product.title}
      </div>
    </div>
  )
}