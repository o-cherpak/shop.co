import type { Product } from "../../interfaces/Products";
import { ImagesOfProduct } from "./ImagesOfProduct.tsx";
import { useEffect, useState } from "react";
import { TextOfProduct } from "./TextOfProduct.tsx";
import { ColorsOfProduct } from "./ColorsOfProduct.tsx";
import { SizesOfProduct } from "./SizesOfProduct.tsx";
import { CartButton } from "./CartButton.tsx";

type ClickedProductSectionProps = {
  product: Product;
};

export function ClickedProductSection({
  product,
}: Readonly<ClickedProductSectionProps>) {
  const [showDiscount, setShowDiscount] = useState(false);

  useEffect(() => {
    setShowDiscount(product.discount > 0);
  }, [product]);

  return (
    <section className="">
      <ImagesOfProduct productId={product.id} />

      <div className={"px-6 flex flex-col gap-4"}>
        <TextOfProduct product={product} showDiscount={showDiscount} />

        <ColorsOfProduct productColors={product.colors} />

        <SizesOfProduct productSizes={product.size} />

        <CartButton />
      </div>
    </section>
  );
}
