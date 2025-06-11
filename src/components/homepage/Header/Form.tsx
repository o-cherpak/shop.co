import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Form() {
  return (
    <form
      className="hidden lg:flex bg-gray-200 lg:min-w-sm xl:min-w-lg p-2 px-4 rounded-3xl mr-10"
      action=""
    >
      <button className="hidden lg:flex text-xl items-center">
        <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
      </button>

      <input type="text" />
    </form>
  );
}
