type ImagesProps = {
  productId: number;
};

export function Images({productId} : Readonly<ImagesProps>) {
  return (
    <div className="flex flex-col items-center px-4 gap-4">
      <div className="flex justify-center rounded-2xl w-full bg-gray-150">
        <img
          src={`/images/clothes${productId + 1}.png`}
          alt="main side of product"
          className="rounded"
        />
      </div>

      <div className="flex justify-around gap-3">
        <img
          src={`/images/clothes${productId + 1}.png`}
          alt="second side of product"
          className="rounded-xl w-2/7"
        />

        <img
          src={`/images/clothes${productId + 1}.png`}
          alt="second side of product"
          className="rounded-xl w-2/7"
        />

        <img
          src={`/images/clothes${productId + 1}.png`}
          alt="second side of product"
          className="rounded-xl w-2/7"
        />
      </div>
    </div>
  );
}
