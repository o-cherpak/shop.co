import {faCartShopping, faSearch, faUser,} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SearchBar} from "./SearchBar.tsx";
import {Link} from "react-router-dom";

export function Navigation() {
  return (
    <nav className="flex gap-3 items-center">
      <SearchBar/>

      <button className="flex lg:hidden text-xl">
        <FontAwesomeIcon icon={faSearch}/>
      </button>

      <Link to="/CartPage" className={"flex text-xl"}>
        <FontAwesomeIcon icon={faCartShopping}/>
      </Link>

      <a href="/" className="flex text-xl">
        <FontAwesomeIcon icon={faUser}/>
      </a>
    </nav>
  );
}
