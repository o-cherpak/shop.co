import {Colors} from "../../constants/colors.ts";

type ColorsOfProductProps = {
  productColors: string[];
  onColorSelect: (color: string) => void;
  selectedColor: string;
}

export function ColorsOfProduct({productColors, onColorSelect, selectedColor}: Readonly<ColorsOfProductProps>) {
  return (
    <div
      className={"pb-4 text-black/60 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.5px] after:bg-gray-300"}>
      <h4 className={"text-black/60 text-lg"}>Select a Colors</h4>

      <div className={"flex gap-4 pt-1"}>
        {productColors.map((color) => {
          return (
            <button
              onClick={() => onColorSelect(color)}
              className={`w-10 h-10 border border-gray-500 rounded-full ${Colors[color]} 
              hover:scale-104 cursor-pointer transition-all duration-500 active:scale-60
              ${selectedColor === color ? "shadow-2xl ring-1 ring-offset-[0.5px] ring-black" : ""}`}
              key={color}
            />

          );
        })}
      </div>
    </div>
  )
}