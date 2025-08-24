import type {Product} from "../../interfaces/Products";
import {ImagesOfProduct} from "./ImagesOfProduct.tsx";
import {useEffect, useState} from "react";
import {TextOfProduct} from "./TextOfProduct.tsx";
import {ColorsOfProduct} from "./ColorsOfProduct.tsx";
import {SizesOfProduct} from "./SizesOfProduct.tsx";
import {CartButton} from "./CartButton.tsx";
import {useCartStore} from "../../store/useCartStore.ts";
import {useCommentsStore} from "../../store/useCommentsStore.ts";
import {toast, Toaster} from "react-hot-toast";


type ClickedProductSectionProps = {
  product: Product;
};

export function ClickedProductSection({product}: Readonly<ClickedProductSectionProps>) {
  const {fetchCart, addToCart} = useCartStore();
  const {comments, fetchComments} = useCommentsStore();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const [showDiscount, setShowDiscount] = useState<boolean>(false);

  const [size, setSize] = useState<string>("");
  const [color, setColor] = useState<string>("");


  useEffect(() => {
    setShowDiscount(product.discount > 0);

    if (comments.length === 0) {
      fetchComments();
    }
  }, [comments.length, fetchComments, product]);

  const handleButtonClick = (amount: number) => {
    if (color === "") {
      toast.error("Please select a color");
    } else if (size === "") {
      toast.error("Please select a size");
    } else {
      addToCart({ product, size, color, amount });
      toast.success("Added to cart!");
    }
  };

  return (
    <section className="lg:flex lg:flex-row gap-4">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <ImagesOfProduct productId={product.id}/>

      <div className={"px-6 flex flex-col gap-4 lg:gap-6 lg:w-3/7"}>
        <TextOfProduct product={product} showDiscount={showDiscount}/>

        <ColorsOfProduct
          productColors={product.colors}
          onColorSelect={setColor}
          selectedColor={color}
        />

        <SizesOfProduct
          productSizes={product.size}
          onSizeSelected={setSize}
          selectedSize={size}
        />

        <CartButton onClick={handleButtonClick}/>
      </div>
    </section>
  );
}
