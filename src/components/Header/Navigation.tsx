import {faCartShopping, faSearch, faUser,} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SearchBar} from "./SearchBar.tsx";
import {Link} from "react-router-dom";
import {hoverTextColor} from "../../constants/colors.ts";

export function Navigation() {
  return (
    <nav className="flex gap-3 items-center">
      <SearchBar/>

      <button className="flex lg:hidden text-xl">
        <FontAwesomeIcon icon={faSearch}/>
      </button>

      <Link to="/CartPage" className={`flex text-xl ${hoverTextColor} transition-all duration-500 ease hover:scale-115 active:scale-90`}>
        <FontAwesomeIcon icon={faCartShopping}/>
      </Link>

      <Link to="/" className={`flex text-xl ${hoverTextColor} transition-all duration-500 ease hover:scale-115 active:scale-90`}>
        <FontAwesomeIcon icon={faUser}/>
      </Link>
    </nav>
  );
}
