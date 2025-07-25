import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DressType } from "./DressType";

export function Aside() {
  return (
    <aside className="hidden lg:flex flex-col w-1/4 border-2 border-gray-300 h-full px-4 py-2 rounded-xl">
      <div className="flex justify-between pb-2 items-center w-full relative after:bottom-0 after:left-0 after:absolute after:content-[''] after:w-full after:h-[1px] after:bg-gray-300 mb-4">
        <h4 className="font-semibold text-xl">Filter</h4>

        <span className="rotate-90 text-black/60">
          <FontAwesomeIcon icon={faSliders} />
        </span>
      </div>

      <DressType />
    </aside>
  );
}
