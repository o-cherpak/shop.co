import {faAngleDown, faSliders} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

type TitleAndFilterButtonProps = {
  title: string;
  isMobile?: boolean;
  onFilterClick: (value: boolean) => void;
  onSortChange: (sort: string) => void;
  currentSort: string;
};

export function TitleAndFilterButton({title,onFilterClick,onSortChange,currentSort}: Readonly<TitleAndFilterButtonProps>) {
  const filterBy = {
    mostPopular: "Most popular",
    FromMinPrice: "From min price",
    FromMaxPrice: "From max price",
    NewProducts: "New products",
    Default: "Default"
  }

  const [toggleAngleButton, setToggleAngleButton] = useState(false);

  const handleClickedFilterButton = () => {
    onFilterClick(true);
  };

  return (
    <div className="relative flex items-end justify-between lg:justify-start">
      <div
        className="flex justify-between items-end w-full px-4 "
      >

        <div className="flex items-end gap-2">
          <h4 className="font-semibold text-2xl">{title}</h4>

          <p className="text-black/60">Showing 1-10 of 100 Products</p>
        </div>

        <p
          className="items-center text-black/60 hidden lg:flex hover:cursor-pointer"
          onClick={() => setToggleAngleButton(!toggleAngleButton)}>
          Sorting by:{" "}
          <span className="text-black font-medium mx-1">{currentSort}</span>{" "}

          <button className="text-black/80">
            <FontAwesomeIcon icon={faAngleDown}/>
          </button>
        </p>
      </div>

      <button
        onClick={handleClickedFilterButton}
        className="lg:hidden rotate-90 rounded-full bg-gray-200 py-1 px-2"
      >
        <FontAwesomeIcon icon={faSliders}/>
      </button>

      {toggleAngleButton && (
        <div className="absolute lg:flex top-8 right-0 w-44 bg-white shadow-lg rounded-b-2xl px-4 py-2 z-1000">
          <ul className="space-y-3">
            {Object.values(filterBy).map((sort, index) => (
              <li
                key={index}
                className="text-lg font-medium text-black/80"
              >
                <button onClick={() => {
                  onSortChange(sort);
                  setToggleAngleButton(false);
                }} className={"hover:font-bold hover:cursor-pointer"}>{sort}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
