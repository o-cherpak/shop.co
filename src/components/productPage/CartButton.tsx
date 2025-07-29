import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export function CartButton() {
  const [amount, setAmount] = useState(1);

  const decreaseAmount = () => {
    setAmount((prev) => {
      if (prev - 1 < 1) {
        return 1;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <div className="flex gap-4 pb-10">
      <div className="flex w-1/3 items-center gap-2 text-xl bg-gray-150 px-4 py-1 rounded-3xl">
        <button className="">
          <FontAwesomeIcon onClick={decreaseAmount} icon={faMinus} />
        </button>

        <span className="w-7 px-2">{amount}</span>

        <button className="">
          <FontAwesomeIcon
            onClick={() => setAmount((prev) => prev + 1)}
            icon={faPlus}
          />
        </button>
      </div>

      <button className="bg-black text-white w-full py-3 rounded-3xl">Add to Cart</button>
    </div>
  );
}
