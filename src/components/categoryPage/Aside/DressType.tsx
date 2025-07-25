import {  faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function DressType() {
  return (
    <div className="w-full pb-4 text-black/60 relative after:bottom-0 after:left-0 after:absolute after:content-[''] after:w-full after:h-[1px] after:bg-gray-300 mb-4">
      <ul className="w-full flex flex-col gap-2">
        <li className="flex justify-between items-center">
          <p>Body</p> <span><FontAwesomeIcon icon={faChevronRight} /></span>
        </li>

        <li className="flex justify-between items-center">
          <p>Legs</p> <span><FontAwesomeIcon icon={faChevronRight} /></span>
        </li>

        <li className="flex justify-between items-center">
          <p>Boots</p> <span><FontAwesomeIcon icon={faChevronRight} /></span>
        </li>

        <li className="flex justify-between items-center">
          <p>Other</p> <span><FontAwesomeIcon icon={faChevronRight} /></span>
        </li>
      </ul>
    </div>
  );
}
