import {
  faSearch,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "./Form";

export function Navigation() {
  return (
    <nav className="flex gap-3 items-center">
      <Form />

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
  );
}
