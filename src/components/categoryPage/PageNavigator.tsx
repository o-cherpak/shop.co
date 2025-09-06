import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {type Dispatch, type SetStateAction, useState} from "react";

type PageNavigatorProps = {
  productsLength: number;
  setStartDisplayedItem: Dispatch<SetStateAction<number>>;
  setEndDisplayedItem: Dispatch<SetStateAction<number>>;
};

export function PageNavigator({productsLength, setStartDisplayedItem, setEndDisplayedItem}: Readonly<PageNavigatorProps>) {
  const [currenctPage, setCurrenctPage] = useState<number>(1);

  const itemsPerPage = 12;
  const amountOfButtonPages = Math.ceil(productsLength / itemsPerPage);

  const pages = [];

  for (let i = 1; i <= amountOfButtonPages; i++) {
    pages.push(i);
  }

  const handeLeftPageClick = () => {
    if (currenctPage - 1 > 0) {
      setStartDisplayedItem(prev => prev - 12);
      setEndDisplayedItem(prev => prev - 12);
      setCurrenctPage(prev => prev - 1);
    } else {
      setStartDisplayedItem(12);
      setStartDisplayedItem(0)
    }
  }

  const handeRightPageClick = () => {
    if (currenctPage + 1 <= pages.length) {
      setStartDisplayedItem(prev => prev + 12);
      setEndDisplayedItem(prev => prev + 12);
      setCurrenctPage(prev => prev + 1);
    }
  }

  return (
    <div
      className="flex justify-between px-2 pt-10 pb-6
      relative before:absolute before:bottom-22 before:left-0 before:content-['']
      before:w-full before:h-[1px] before:bg-gray-300"
    >

      <button
        className="flex items-center gap-2 border-2 border-gray-200 p-2 rounded-xl cursor-pointer"
        onClick={handeLeftPageClick}
      >
        <FontAwesomeIcon icon={faArrowLeft}/> Previous
      </button>

      <div className="flex gap-4">
        {pages.map((page) => {
          return (
            <button
              className={`${currenctPage === page ? "font-bold text-black" : "font-medium text-black/60"}`}
              key={page}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        className="flex items-center gap-2 border-2 border-gray-200 p-2 rounded-xl cursor-pointer"
        onClick={handeRightPageClick}
      >
        <FontAwesomeIcon icon={faArrowRight}/> Next
      </button>
    </div>
  );
}
