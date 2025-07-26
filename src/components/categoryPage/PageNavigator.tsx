import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PageNavigatorProps = {
  productsLength: number;
  isMobile?: boolean;
};

export function PageNavigator({
  productsLength,
  isMobile,
}: Readonly<PageNavigatorProps>) {
  const itemsPerPage = isMobile ? 6 : 12;
  const amountOfButtonPages = Math.ceil(productsLength / itemsPerPage);

  const pages = [];

  for (let i = 1; i <= amountOfButtonPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-between px-2 pt-4 pb-6 relative before:absolute before:bottom-22 before:left-0 before:content-[''] before:w-full before:h-[1px] before:bg-gray-300">
      <button className="flex items-center gap-2 border-2 border-gray-200 p-2 rounded-xl">
        <FontAwesomeIcon icon={faArrowLeft} /> Previous
      </button>

      <div className="flex gap-4">
        {pages.map((page) => {
          return (
            <button className="text-black/60" key={page}>
              {page}
            </button>
          );
        })}
      </div>

      <button className="flex items-center gap-2 border-2 border-gray-200 p-2 rounded-xl">
        <FontAwesomeIcon icon={faArrowRight} /> Next
      </button>
    </div>
  );
}
