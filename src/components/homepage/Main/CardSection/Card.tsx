import type { Product } from "../../../../interfaces/Products";

type ArrivalsCardprops = {
  product: Product;
  showDiscount?: boolean;
};

export function Card({ product, showDiscount }: Readonly<ArrivalsCardprops>) {
  return (
    <div className="bg-white rounded-lg p-4 flex-shrink-0">
      <img
        src={`/images/clothes${product.id + 1}.png`}
        alt={product.title}
        className="rounded mb-2 w-60"
      />

      <h1 className="font-semibold text-xl mb-1">{product.title}</h1>

      <div className="flex items-baseline space-x-2">
        <p className="text-lg font-bold text-black">
          ${product.priceWithDiscount}
        </p>
        {product.discount > 0 && (
          <>
            <p className="line-through text-sm text-black/60">
              ${product.price}
            </p>

            {!showDiscount && (
              <span className="text-xs text-red-500 bg-red-500/20 p-1 px-2 rounded-3xl">
                -{product.discount}%
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
}
