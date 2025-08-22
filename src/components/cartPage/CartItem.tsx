import type {ProductWithParam} from "../../interfaces/Products.ts";
import {ChangeAmountButton} from "../productPage/CommentSection/ChangeAmountButton.tsx";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {useCartStore} from "../../store/useCartStore.ts";

type CartItemsProps = {
  productWithParam: ProductWithParam;
}

export function CartItem({productWithParam}: Readonly<CartItemsProps>) {
  const [amount, setAmount] = useState<number>(productWithParam.amount);
  const {updateProductAmount, deleteProduct} = useCartStore();

  useEffect(() => {
    updateProductAmount(productWithParam, amount)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);


  return (
    <div
      className={"flex items-center gap-4 pb-2 lg:px-4 lg:py-4 border-b-[1px] last:border-none last:pb-0 border-b-gray-300"}
    >
      <div>
        <img
          src={`../../images/clothes${productWithParam.product.id + 1}.png`}
          alt={productWithParam.product.description}
          className={"h-28 w-46 lg:h-32 lg:w-42"}
        />
      </div>

      <div className={"flex flex-col w-full"}>
        <h4 className={"flex gap-6 text-xl font-semibold justify-between"}>
          {productWithParam.product.title}

          <span className={"text-red-500 cursor-pointer hover:text-red-700 active:scale-60 transition-all duration-500"} onClick={() => deleteProduct(productWithParam)}>
            <FontAwesomeIcon icon={faTrashCan}/>
          </span>
        </h4>

        <div className={"pb-2"}>
          <p>Size: <span className={"text-black/60"}>{productWithParam.size}</span></p>
          <p>Color: <span className={"text-black/60"}>{productWithParam.color}</span></p>
        </div>

        <div className={"flex items-center justify-between"}>
          <p className={"text-lg lg:text-xl font-semibold"}>
            ${(productWithParam.product.price) * productWithParam.amount}
          </p>

          <ChangeAmountButton amountP={amount} setAmount={setAmount}/>
        </div>
      </div>
    </div>
  )
}