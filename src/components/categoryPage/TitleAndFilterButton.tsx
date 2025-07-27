import { faAngleDown, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TitleAndFilterButtonProps = {
  title: string;
  isMobile?: boolean;
  onFilterClick: (value: boolean) => void;
};

export function TitleAndFilterButton({
  title,
  onFilterClick,
}: Readonly<TitleAndFilterButtonProps>) {
  const handleClickedFilterButton = () => {
    onFilterClick(true);
  };

  return (
    <div className="flex items-end justify-between lg:justify-start">
      <div className="flex justify-between items-end w-full px-4">
        <div className="flex items-end gap-2">
          <h4 className="font-semibold text-2xl">{title}</h4>

          <p className="text-black/60">Showing 1-10 of 100 Products</p>
        </div>

        <p className="flex items-center text-black/60">
          Sorting by:{" "}
          <span className="text-black font-medium mx-1">Most popular</span>{" "}
          
          <button className="text-black/80">
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
        </p>
      </div>

      <button
        onClick={handleClickedFilterButton}
        className="lg:hidden rotate-90 rounded-full bg-gray-200 py-1 px-2"
      >
        <FontAwesomeIcon icon={faSliders} />
      </button>
    </div>
  );
}
