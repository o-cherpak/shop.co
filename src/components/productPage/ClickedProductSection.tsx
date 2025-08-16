import type {Product} from "../../interfaces/Products";
import {ImagesOfProduct} from "./ImagesOfProduct.tsx";
import {useEffect, useState} from "react";
import {TextOfProduct} from "./TextOfProduct.tsx";
import {ColorsOfProduct} from "./ColorsOfProduct.tsx";
import {SizesOfProduct} from "./SizesOfProduct.tsx";
import {CartButton} from "./CartButton.tsx";
import {useCartStore} from "../../store/useCartStore.ts";


type ClickedProductSectionProps = {
  product: Product;
};

export function ClickedProductSection({product}: Readonly<ClickedProductSectionProps>) {
  const {fetchCart, addToCart} = useCartStore();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const [showDiscount, setShowDiscount] = useState<boolean>(false);
  const [isCartClicked, setIsCartClicked] = useState<boolean>(false);

  const [size, setSize] = useState<string>("Large");
  const [color, setColor] = useState<string>("Blue");


  useEffect(() => {
    setShowDiscount(product.discount > 0);
  }, [product]);

  const handleButtonClick = (val: boolean, amount: number) => {
    setIsCartClicked(val);

    if (isCartClicked) {
      addToCart({product, size, color, amount})
    }
  };

  return (
    <section className="lg:flex lg:flex-row gap-4">
      <ImagesOfProduct productId={product.id}/>

      <div className={"px-6 flex flex-col gap-4 lg:gap-6 lg:w-3/7"}>
        <TextOfProduct product={product} showDiscount={showDiscount}/>

        <ColorsOfProduct productColors={product.colors} onColorSelect={setColor}/>

        <SizesOfProduct productSizes={product.size} onSizeSelected={setSize}/>

        <CartButton onClick={handleButtonClick}/>
      </div>
    </section>
  );
}
