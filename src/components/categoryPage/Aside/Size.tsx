import {faAngleRight, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {useFilteredProductsStore} from "../../../store/useFilteredProductsStore.ts";

export function Size() {
  const [isOpen, setIsOpen] = useState(true);

  const {sizes, addSize, removeSize} = useFilteredProductsStore();

  const sizesArray = [
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "xx-large",
    "3x-large",
    "4x-large",
  ];

  const handleOnClickClose = () => {
    setIsOpen(false);
  };

  const handleOnClickOpen = () => {
    setIsOpen(true);
  };

  const handleButtonClick = (sizeP: string) => {
    if (sizes.includes(sizeP)) {
      removeSize(sizeP);
    } else addSize(sizeP)
  }

  return (
    <div
      className={`${
        isOpen ? "pb-4" : "pb-0"
      } flex flex-col w-full justify-between items-start relative after:absolute after:left-0 after:bottom-0 after:content-[''] after:w-full after:h-[0.5px] after:bg-gray-300 after:block after:m-0 after:p-0`}
    >
      <div className="flex w-full justify-between items-center pb-4">
        <h4 className="font-semibold text-xl">Size</h4>

        {isOpen ? (
          <button onClick={handleOnClickClose} className="flex hover:cursor-pointer">
            <FontAwesomeIcon icon={faAngleUp}/>
          </button>
        ) : (
          <button onClick={handleOnClickOpen} className="flex hover:cursor-pointer">
            <FontAwesomeIcon icon={faAngleRight}/>
          </button>
        )}
      </div>

      <div
        className={`${
          isOpen ? "grid" : "hidden"
        } grid-cols-3 lg:grid-cols-2 gap-4`}
      >
        {sizesArray.map((size, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(size)}
            className={`${sizes.includes(size) ?
              `bg-black text-white hover:bg-black/80` : `bg-gray-200 text-black/60 hover:bg-gray-300`}
            flex justify-center p-2 px-3 rounded-3xl hover:cursor-pointer transition-all duration-300`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
