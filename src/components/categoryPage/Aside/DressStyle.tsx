import { faAngleUp, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function DressStyle() {
  return (
    <div className="flex flex-col w-full justify-between items-center mt-4 ">
      <div className="flex w-full justify-between items-center pb-4">
        <h4 className="font-semibold text-xl">Dress Style</h4>

        <button className="flex">
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
      </div>

      <div className="flex flex-col w-full gap-2 text-black/60">
        <button className="flex items-center justify-between">
          Casual <span><FontAwesomeIcon icon={faChevronRight}/></span>
        </button>

        <button className="flex items-center justify-between">
          Formal <span><FontAwesomeIcon icon={faChevronRight}/></span>
        </button>

        <button className="flex items-center justify-between">
          Party <span><FontAwesomeIcon icon={faChevronRight}/></span>
        </button>

        <button className="flex items-center justify-between">
          Gym <span><FontAwesomeIcon icon={faChevronRight}/></span>
        </button>
      </div>
    </div>
  );
}
