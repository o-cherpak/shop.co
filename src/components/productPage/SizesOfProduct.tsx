type SizesOfProductProps = {
  productSizes: string[];
};

export function SizesOfProduct({
  productSizes,
}: Readonly<SizesOfProductProps>) {
  return (
    <div
      className={
        "pb-4 text-black/60 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.5px] after:bg-gray-300"
      }
    >
      <h4 className={"text-black/60 text-xl"}>Choose Size</h4>

      <div className={"flex w-full justify-around pt-1"}>
        {productSizes.map((size) => (
          <button
            key={size}
            className={`flex w-18 justify-center py-2 px-3 rounded-3xl bg-gray-200 text-black/60`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
