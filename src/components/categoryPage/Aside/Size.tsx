import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Size() {
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  return (
    <div className="mt-4 flex flex-col w-full justify-between items-start pb-4 relative after:absolute after:left-0 after:bottom-0 after:content-[''] after:w-full after:h-[0.5px] after:bg-gray-300 after:block after:m-0 after:p-0">
      <div className="flex w-full justify-between items-center pb-4">
        <h4 className="font-semibold text-xl">Size</h4>

        <button className="flex">
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-2 gap-4">
        {sizes.map((size, index) => (
          <button
            key={index}
            className={`flex justify-center p-2 px-3 rounded-3xl bg-gray-200 text-black/60`}
          >{size}</button>
        ))}
      </div>
    </div>
  );
}
