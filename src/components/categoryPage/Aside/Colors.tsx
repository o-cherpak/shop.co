import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Colors() {
  const buttons = [
    { bg: "bg-green-500", border: "border-green-600" },
    { bg: "bg-red-500", border: "border-red-600" },
    { bg: "bg-yellow-500", border: "border-yellow-600" },
    { bg: "bg-orange-500", border: "border-orange-600" },
    { bg: "bg-sky-500", border: "border-sky-600" },
    { bg: "bg-blue-500", border: "border-blue-600" },
    { bg: "bg-violet-500", border: "border-violet-600" },
    { bg: "bg-pink-500", border: "border-pink-600" },
    { bg: "bg-white", border: "border-gray-200" },
    { bg: "bg-black", border: "border-black" },
  ];

  return (
    <div className="mt-4 flex flex-col w-full justify-between items-center pb-4 relative after:absolute after:left-0 after:bottom-0 after:content-[''] after:w-full after:h-[0.5px] after:bg-gray-300 after:block after:m-0 after:p-0">
      <div className="flex w-full justify-between items-center pb-4">
        <h4 className="font-semibold text-xl">Colors</h4>

        <button className="flex">
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
      </div>

      <div className="grid grid-cols-7 lg:grid-cols-5 gap-4">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`p-4 border-2 rounded-full ${button.bg} ${button.border}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
