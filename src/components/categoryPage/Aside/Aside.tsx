import { faClose, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DressType } from "./DressType";
import { PriceRange } from "./PriceRange";
import { Colors } from "./Colors";
import { Size } from "./Size";
import { DressStyle } from "./DressStyle";
import { useEffect } from "react";

type AsideProps = {
  isFilterButtonClicked: boolean;
  onClose: (val: boolean) => void;
};

export function Aside({
  isFilterButtonClicked,
  onClose,
}: Readonly<AsideProps>) {
  useEffect(() => {
    if (isFilterButtonClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isFilterButtonClicked]);

  const handleCloseFilter = () => {
    onClose(false);
  };

  return (
    <aside
      className={`${
        isFilterButtonClicked ? "flex" : "hidden"
      } fixed bg-white h-screen overflow-y-auto top-0 right-0 z-50 pt-4 lg:pt-0 lg:flex flex-col w-full lg:w-1/4 border-2 border-gray-300 lg:h-full px-4 py-2 rounded-xl gap-4`}
    >
      <div className="pt-4 flex w-full justify-between items-center pb-4 relative after:absolute after:left-0 after:bottom-0 after:content-[''] after:w-full after:h-[1px] after:bg-gray-300 after:block after:m-0 after:p-0">
        <h4 className="font-semibold text-xl">Filter</h4>

        {isFilterButtonClicked ? (
          <button onClick={handleCloseFilter} className="text-lg">
            <FontAwesomeIcon icon={faClose} />
          </button>
        ) : (
          <span className="rotate-90 text-black/60">
            <FontAwesomeIcon icon={faSliders} />
          </span>
        )}
      </div>

      <DressType />

      <PriceRange />

      <Colors />

      <Size />

      <DressStyle />

      <button className="bg-black mt-4 w-full text-white rounded-3xl p-3 mb-2">
        Apply Filter
      </button>
    </aside>
  );
}
