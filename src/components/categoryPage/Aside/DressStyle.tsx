import {faAngleRight, faAngleUp, faChevronRight,} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {useFilteredProductsStore} from "../../../store/useFilteredProductsStore.ts";

export function DressStyle() {
  const [isOpen, setIsOpen] = useState(true);

  const dressStyles = ["Casual", "Formal", "Party", "Gym"];
  const {setStyle, style} = useFilteredProductsStore();

  const handleButtonClick = (styleP: string) => {
    if (styleP === style) {
      setStyle("");
    } else {
      setStyle(styleP);
    }
  };

  return (
    <div className="flex flex-col w-full justify-between items-center">
      <div className="flex w-full justify-between items-center pb-4">
        <h4 className="font-semibold text-xl">Dress Style</h4>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex hover:cursor-pointer"
        >
          <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleRight}/>
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col w-full gap-2 text-black/60">
          {dressStyles.map((styleName) => (
            <button
              key={styleName}
              className={`flex items-center justify-between p-1 px-2 rounded ${
                styleName.toLowerCase() === style.toLowerCase()
                  ? "bg-black text-white"
                  : "hover:bg-gray-200 hover:text-black"
              }`}
              onClick={() => handleButtonClick(styleName.toLowerCase())}
            >
              {styleName}
              <span>
                <FontAwesomeIcon icon={faChevronRight}/>
              </span>
            </button>
          ))}

        </div>
      )}
    </div>
  );
}
