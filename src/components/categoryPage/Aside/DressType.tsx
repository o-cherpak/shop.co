import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useFilteredProductsStore} from "../../../store/useFilteredProductsStore.ts";

export function DressType() {
  const {setType} = useFilteredProductsStore();

  return (
    <div
      className="w-full pb-4 text-black/60 relative after:bottom-0 after:left-0 after:absolute after:content-[''] after:w-full after:h-[1px] after:bg-gray-300">
      <ul className="w-full flex flex-col gap-2">
        <li className="flex justify-between items-center">
          <button onClick={() => setType("Body")}>Body</button>
          <span><FontAwesomeIcon icon={faChevronRight}/></span>
        </li>

        <li className="flex justify-between items-center">
          <button onClick={() => setType("Legs")}>Legs</button>
          <span><FontAwesomeIcon icon={faChevronRight}/></span>
        </li>

        <li className="flex justify-between items-center">
          <button onClick={() => setType("Boots")}>Boots</button>
          <span><FontAwesomeIcon icon={faChevronRight}/></span>
        </li>

        <li className="flex justify-between items-center">
          <button onClick={() => setType("Other")}>Other</button>
          <span><FontAwesomeIcon icon={faChevronRight}/></span>
        </li>
      </ul>
    </div>
  );
}
