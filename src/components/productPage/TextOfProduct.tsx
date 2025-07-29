import type { Product } from "../../interfaces/Products.ts";

type TextOfProductProps = {
  product: Product;
  showDiscount: boolean;
};

export function TextOfProduct({
  product,
  showDiscount,
}: Readonly<TextOfProductProps>) {
  return (
    <div className={""}>
      <h4
        style={{ fontFamily: "Integral CF" }}
        className="font-extrabold text-2xl lg:text-3xl pb-2"
      >
        {product.title}
      </h4>

      <div className="flex items-center space-x-2">
        <p className="text-lg lg:text-xl font-bold text-black">
          ${product.priceWithDiscount}
        </p>

        {product.discount > 0 && (
          <>
            <p className="line-through text-lg lg:text-xl text-black/60">
              ${product.price}
            </p>

            {showDiscount && (
              <span className="text-sm text-red-500 bg-red-500/20 ml-1 p-1 px-2 rounded-3xl">
                -{product.discount}%
              </span>
            )}
          </>
        )}
      </div>

      <p
        className={
          "pt-1 pb-4 text-black/60 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.5px] after:bg-gray-300"
        }
      >
        {product.description}
      </p>
    </div>
  );
}
