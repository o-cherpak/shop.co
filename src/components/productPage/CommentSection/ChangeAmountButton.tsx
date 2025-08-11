import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import type {Dispatch, SetStateAction} from "react";

type ChangeAmountButtonProps = {
  amountP: number;
  setAmount: Dispatch<SetStateAction<number>>;
}

export function ChangeAmountButton({amountP, setAmount}: ChangeAmountButtonProps) {

  const decreaseAmount = () => {
    setAmount((prev: number) => {
      if (prev - 1 < 1) {
        return 1;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <div className="flex w-1/3 items-center justify-center gap-2 text-xl bg-gray-150 px-4 py-1 rounded-3xl">
      <button className="">
        <FontAwesomeIcon onClick={decreaseAmount} icon={faMinus}/>
      </button>

      <span className="w-7 px-2">{amountP}</span>

      <button className="">
        <FontAwesomeIcon
          onClick={() => setAmount((prev) => prev + 1)}
          icon={faPlus}
        />
      </button>
    </div>
  )
}