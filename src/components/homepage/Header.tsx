import {
  faBars,
  faCartShopping,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
  return (
    <header className="flex justify-between lg:justify-around lg:gap-12 py-4 px-4 border-b-2 border-amber-300">
      <div className="flex gap-2 md:gap-4 lg:gap-6">
        <button className="flex lg:hidden text-xl items-center pt-1 lg:pt-[1px]">
          <FontAwesomeIcon icon={faBars} />
        </button>

        <h2
          style={{ fontFamily: "Integral CF" }}
          className="font-extrabold text-2xl lg:text-3xl"
        >
          SHOP.CO
        </h2>

        <ul className="hidden lg:flex items-center gap-6">
          <a href="/">
            <li className="text-lg">Shop</li>
          </a>

          <a href="/">
            <li className="text-lg">On Sale</li>
          </a>

          <a href="/">
            <li className="text-lg">New Arrivals</li>
          </a>

          <a href="/">
            <li className="text-lg">Brands</li>
          </a>
        </ul>
      </div>

      <nav className="flex gap-3 items-center">
        <form
          className="hidden lg:flex bg-gray-200 lg:min-w-sm xl:min-w-lg p-2 px-4 rounded-3xl mr-10"
          action=""
        >
          <button className="hidden lg:flex text-xl items-center">
            <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
          </button>

          <input type="text" />
        </form>

        <button className="flex lg:hidden text-xl">
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <a href="/" className="flex text-xl">
          <FontAwesomeIcon icon={faCartShopping} />
        </a>

        <a href="/" className="flex text-xl">
          <FontAwesomeIcon icon={faUser} />
        </a>
      </nav>
    </header>
  );
}
