import {
  faAngleRight,
  faAngleUp,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export function DressStyle() {
  const [isOpen, setIsOpen] = useState(true);

  const handleOnClickClose = () => {
    setIsOpen(false);
  };

  const handleOnClickOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col w-full justify-between items-center">
      <div className="flex w-full justify-between items-center pb-4">
        <h4 className="font-semibold text-xl">Dress Style</h4>

        {isOpen ? (
          <button onClick={handleOnClickClose} className="flex hover:cursor-pointer">
            <FontAwesomeIcon icon={faAngleUp} />
          </button>
        ) : (
          <button onClick={handleOnClickOpen} className="flex hover:cursor-pointer">
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        )}
      </div>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col w-full gap-2 text-black/60`}
      >
        <button className="flex items-center justify-between">
          Casual{" "}
          <span>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </button>

        <button className="flex items-center justify-between">
          Formal{" "}
          <span>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </button>

        <button className="flex items-center justify-between">
          Party{" "}
          <span>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </button>

        <button className="flex items-center justify-between">
          Gym{" "}
          <span>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </button>
      </div>
    </div>
  );
}
