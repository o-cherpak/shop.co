import {useState} from "react";
import {ChangeAmountButton} from "./CommentSection/ChangeAmountButton.tsx";
import {hoverBgColor} from "../../constants/colors.ts";

type CartButtonProps = {
  onClick: (amount: number) => void;
}

export function CartButton({onClick}: Readonly<CartButtonProps>) {
  const [amount, setAmount] = useState(1);


  return (
    <div className="flex gap-4 pb-6">

      <ChangeAmountButton amountP={amount} setAmount={setAmount}/>

      <button
        className={`bg-black text-white w-full py-3 rounded-3xl cursor-pointer ${hoverBgColor} 
        transition-all duration-500 active:scale-60`}
        onClick={() => onClick(amount)}
      >
        Add to Cart
      </button>
    </div>
  );
}
