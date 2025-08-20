import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {type Dispatch, type SetStateAction} from "react";
import {hoverTextColor} from "../../../constants/colors.ts";

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
    <div className="flex items-center justify-center gap-2 bg-gray-150 px-4 py-1 rounded-3xl">
      <button className={`cursor-pointer ${hoverTextColor} transition-all duration-500 active:scale-60`}>
        <FontAwesomeIcon onClick={decreaseAmount} icon={faMinus}/>
      </button>

      <span className="w-7 px-2">{amountP}</span>

      <button className={`cursor-pointer ${hoverTextColor} transition-all duration-500 active:scale-60`}>
        <FontAwesomeIcon
          onClick={() => setAmount((prev) => prev + 1)}
          icon={faPlus}
        />
      </button>
    </div>
  )
}