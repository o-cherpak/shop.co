import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TopSingUp() {
  return (
    <div className="px-4 py-2 bg-black flex items-center justify-between">
      <p className="text-white text-sm text-center flex-grow">
        Sign up and get 20% off to your first order.{" "}
        <a className="font-bold underline" href="/">
          Sign Up Now
        </a>
      </p>

      <button className="hidden sm:flex justify-items">
        <FontAwesomeIcon icon={faXmark} className="text-white" />
      </button>
    </div>
  );
}
