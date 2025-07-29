type ImagesProps = {
  productId: number;
};

export function ImagesOfProduct({productId}: Readonly<ImagesProps>) {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:flex items-center lg:items-stretch px-4 lg:px-6 gap-4 lg:gap-0 lg:w-1/2">
      <div className="flex justify-center rounded-2xl h-full bg-gray-150 w-full lg:w-fit">
        <img
          src={`/images/clothes${productId + 1}.png`}
          alt="main side of product"
          className="rounded"
        />
      </div>

      <div className="flex lg:flex-col justify-around items-center lg:items-center gap-3 lg:gap-2">
        <img
          src={`/images/clothes${productId + 1}.png`}
          alt="second side of product"
          className="rounded-xl w-2/7 lg:w-1/2"
        />

        <img
          src={`/images/clothes${productId + 1}.png`}
          alt="second side of product"
          className="rounded-xl w-2/7 lg:w-1/2"
        />

        <img
          src={`/images/clothes${productId + 1}.png`}
          alt="second side of product"
          className="rounded-xl w-2/7 lg:w-1/2"
        />
      </div>
    </div>
  );
}
