type ColorsOfProductProps = {
  productColors: string[];
  onColorSelect: (color: string) => void;
}

export function ColorsOfProduct({productColors, onColorSelect}: Readonly<ColorsOfProductProps>) {
  return (
    <div
      className={"pb-4 text-black/60 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.5px] after:bg-gray-300"}>
      <h4 className={"text-black/60 text-lg"}>Select a Colors</h4>

      <div className={"flex gap-4 pt-1"}>
        {productColors.map((color) => {
          let bgColor: string;

          if (color === "black" || color === "white") {
            bgColor = `bg-${color}`;
          } else {
            bgColor = `bg-${color}-500`;
          }

          return (
            <button
              onClick={() => onColorSelect(color)}
              className={`w-10 h-10 rounded-full ${bgColor}`}
              key={color}
            ></button>
          );
        })}
      </div>
    </div>
  )
}