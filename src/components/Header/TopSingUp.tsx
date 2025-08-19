import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {hoverTextColor} from "../../constants/colors.ts";

export function TopSingUp() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible &&
    <div className="p-2 md:py-4 bg-black flex items-center justify-between">
        <p className="text-white text-sm text-center flex-grow">
            Sign up and get 20% off to your first order.{" "}
            <a
                className=" font-bold underline"
                href="/"
            >
                Sign Up Now
            </a>
        </p>

        <button
            className={`hidden sm:flex justify-items pr-10 cursor-pointer 
            hover:${hoverTextColor} text-white transition duration-200 ease`}

            onClick={() => setIsVisible(false)}>

            <FontAwesomeIcon icon={faXmark} className="text-xl"/>
        </button>
    </div>
  );
}
