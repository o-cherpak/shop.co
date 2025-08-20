import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {hoverBgColor} from "../../constants/colors.ts";

export function EmptyCartMessage() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-black/60">
      <div className="bg-gray-100 p-6 rounded-full mb-4 shadow-md">
        <FontAwesomeIcon icon={faCartShopping} className="text-4xl text-pink-500" />
      </div>

      <h2 className="text-3xl font-semibold mb-2 text-black">Your cart is empty</h2>

      <p className="text-center mb-6">
        Looks like you haven’t added anything to your cart yet.
      </p>

      <Link
        to={"/CategoryPage"}
        className={`px-6 py-2 rounded-full bg-black text-white 
        cursor-pointer transition-all duration-500 hover:scale-105 active:scale-60 ${hoverBgColor} hover:text-white`}>

        Start Shopping
      </Link>
    </div>
  );
}
