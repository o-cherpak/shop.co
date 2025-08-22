import {useState} from "react";
import {ChangeAmountButton} from "./CommentSection/ChangeAmountButton.tsx";

type CartButtonProps = {
  onClick: (amount: number) => void;
}

export function CartButton({onClick}: Readonly<CartButtonProps>) {
  const [amount, setAmount] = useState(1);


  return (
    <div className="flex gap-4 pb-6">

      <ChangeAmountButton amountP={amount} setAmount={setAmount}/>

      <button
        className="bg-black text-white w-full py-3 rounded-3xl hover:cursor-pointer"
        onClick={() => onClick(amount)}
      >
        Add to Cart
      </button>
    </div>
  );
}
