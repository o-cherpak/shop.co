import { faAngleRight, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Range } from "react-range";

export function PriceRange() {
  const [values, setValues] = useState([0, 490]);
  const [isOpen, setIsOpen] = useState(true);

  const handleOnClickClose = () => {
    setIsOpen(false);
  };

  const handleOnClickOpen = () => {
    setIsOpen(true);
  };

  return (
    <div
      className={`w-full ${
        isOpen ? "pb-12" : "pb-0"
      } flex flex-col relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.5px] after:bg-gray-300`}
    >
      <div className="flex w-full justify-between items-center pb-4">
        <h4 className="font-semibold text-xl">Price</h4>

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

      <div className={`${isOpen ? "" : "hidden"}`}>
        <Range
          step={10}
          min={0}
          max={500}
          values={values}
          onChange={(vals) => setValues(vals)}
          renderTrack={({ props, children} ) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "6px",
                width: "100%",
                backgroundColor: "#F0F0F0",
                borderRadius: "100px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  height: "6px",
                  background: "#000",
                  left: `${(values[0] / 500) * 100}%`,
                  right: `${100 - (values[1] / 500) * 100}%`,
                }}
              />
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div
              {...props}
              key={index}
              style={{
                ...props.style,
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                backgroundColor: "black",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "24px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "#000",
                  fontSize: "14px",
                }}
              >
                ${values[index]}
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
}
