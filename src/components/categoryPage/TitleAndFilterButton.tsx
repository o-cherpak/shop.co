import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TitleAndFilterButtonProps = {
  title: string; 
}

export function TitleAndFilterButton({title} : Readonly<TitleAndFilterButtonProps>) {
  return (
    <div className="flex items-end justify-between lg:justify-start">
      <div className="flex gap-2 items-end justify-between">
        <h4 className="font-semibold text-2xl">{title}</h4>

        <p className="text-black/60">Showing 1-10 of 100 Products</p>
      </div>

      <button className="lg:hidden rotate-90 rounded-full bg-gray-200 py-1 px-2">
        <FontAwesomeIcon icon={faSliders} />
      </button>
    </div>
  );
}
