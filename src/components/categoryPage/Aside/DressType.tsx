import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useFilteredProductsStore} from "../../../store/useFilteredProductsStore.ts";

export function DressType() {
  const {setType, type} = useFilteredProductsStore();

  const types = ["Body", "Legs", "Boots", "Other"];

  const handleButtonClick = (typeP: string) => {
    if (typeP === type) {
      setType("");
    } else setType(typeP)

  }

  return (
    <div
      className="w-full pb-4 text-black/60 relative after:bottom-0 after:left-0 after:absolute after:content-[''] after:w-full after:h-[1px] after:bg-gray-300">
      <ul className="w-full flex flex-col gap-2">
        {types.map((t) => (
          <li
            key={t}
            className={`flex justify-between items-center px-2 py-1 rounded cursor-pointer transition-all ${
              type === t ? "bg-black text-white" : "hover:bg-gray-200 hover:text-black"
            }`}
          >
            <button
              className="w-full text-left"
              onClick={() => handleButtonClick(t)}
            >
              {t}
            </button>
            <span>
              <FontAwesomeIcon icon={faChevronRight}/>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
