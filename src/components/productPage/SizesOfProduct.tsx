type SizesOfProductProps = {
  productSizes: string[];
  onSizeSelected: (size: string) => void;
  selectedSize: string;
};

export function SizesOfProduct({productSizes, onSizeSelected, selectedSize}: Readonly<SizesOfProductProps>) {
  return (
    <div
      className={
        "pb-4 text-black/60 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.5px] after:bg-gray-300"
      }
    >
      <h4 className={"text-black/60 text-xl"}>Choose Size</h4>

      <div className={"flex w-full justify-around lg:justify-start lg:gap-4 pt-1"}>
        {productSizes.map((size) => (
          <button
            onClick={() => {
              onSizeSelected(size)
            }}
            key={size}
            className={`flex w-20 lg:w-22 justify-center p-2 rounded-3xl text-black/60 cursor-pointer 
            transition-all duration-500 active:scale-60 hover:bg-gray-300
            ${selectedSize === size ? "bg-black text-white" : "bg-gray-200"}`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
