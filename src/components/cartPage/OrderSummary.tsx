import type {ProductWithParam} from "../../interfaces/Products.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faTag} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";

type OrderSummaryProps = {
  productsWithParam: ProductWithParam[];
}

export function OrderSummary({productsWithParam}: Readonly<OrderSummaryProps>) {
  const [subtotal, setSubtotal] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newSubtotal = productsWithParam.reduce(
      (acc, item) => acc + item.product.price * item.amount, 0
    );

    const newDiscount = productsWithParam.reduce(
      (acc, item) => acc + (item.product.price - item.product.priceWithDiscount) * item.amount, 0
    );

    const newDeliveryFee = productsWithParam.length > 0 ? 15 : 0;

    setSubtotal(newSubtotal);
    setTotalDiscount(newDiscount);
    setDeliveryFee(newDeliveryFee);
    setTotal((newSubtotal - newDiscount) + newDeliveryFee);
  }, [productsWithParam]);


  return (
    <div className={"border border-gray-200 rounded-2xl lg:mt-15 py-6 lg:py-10 lg:px-4 px-2 mx-4 lg:w-1/3 h-[100%]"}>
      <h4 className={"font-semibold text-2xl pb-4"}>Order Summary</h4>

      <div className={"text-lg"}>
        <TopSection subtotal={subtotal} totalDiscount={totalDiscount} deliveryFee={deliveryFee}/>

        <BottomSection total={total}/>
      </div>

      <button className={"bg-black text-white rounded-full p-4 w-full flex items-center justify-center gap-2"}>
        Go to Checkout
        <FontAwesomeIcon icon={faArrowRight}/>
      </button>
    </div>
  );
}

function TopSection({subtotal, totalDiscount, deliveryFee}: {
  subtotal: number;
  totalDiscount: number,
  deliveryFee: number
}) {
  return (
    <div className={"border-b-[2px] border-gray-200 flex flex-col gap-2 pb-3"}>
      <p className={"text-black/60 flex justify-between"}>
        Subtotal
        <span className={"text-black font-semibold"}>${subtotal.toFixed(2)}</span>
      </p>

      <p className={"text-black/60 flex justify-between"}>
        Discount
        <span className={"text-red-500 font-semibold"}>-${totalDiscount.toFixed(2)}</span>
      </p>

      <p className={"text-black/60 flex justify-between"}>
        Delivery Fee
        <span className={"text-black font-semibold"}>${deliveryFee.toFixed(2)}</span>
      </p>
    </div>
  )
}

function BottomSection({total}: { total: number }) {
  return (
    <div className={"pt-3 space-y-2 pb-4"}>
      <p className={"flex justify-between"}>Total <span className={"font-bold text-xl"}>${total}</span></p>

      <div className={"w-full flex items-center justify-center gap-2"}>
        <div className={"bg-gray-200 w-2/3 rounded-full p-2 px-4 flex items-end gap-2"}>
          <span className={"text-gray-300"}><FontAwesomeIcon icon={faTag}/></span>

          <input type="text" className={""} placeholder={"Add promo code"}/>
        </div>

        <button className={"bg-black text-white w-1/3 rounded-full p-2"}>Apply</button>
      </div>
    </div>
  )
}