import type {ProductWithParam} from "../../interfaces/Products.ts";
import {ChangeAmountButton} from "../productPage/CommentSection/ChangeAmountButton.tsx";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";

type CartItemsProps = {
  productWithParam: ProductWithParam;
}


export function CartItem({productWithParam}: Readonly<CartItemsProps>) {
  const [amount, setAmount] = useState<number>(productWithParam.amount);

  return (
    <div className={"flex w-full items-center justify-center gap-4"}>
      <div>
        <img
          src={`../../images/clothes${productWithParam.product.id + 1}.png`}
          alt={productWithParam.product.description}
          className="w-28 h-28"
        />
      </div>

      <div className={"flex flex-col"}>
        <h4 className={"flex gap-6 text-xl font-semibold"}>
          {productWithParam.product.title}

          <span className={"text-red-500"}>
            <FontAwesomeIcon icon={faTrashCan}/>
          </span>
        </h4>

        <div>
          <p>Size: {productWithParam.size}</p>
          <p>Color: {productWithParam.color}</p>
        </div>

        <div className={"flex items-center"}>
          <p>{productWithParam.product.price}</p>

          <ChangeAmountButton amountP={amount} setAmount={setAmount}/>
        </div>
      </div>
    </div>
  )
}