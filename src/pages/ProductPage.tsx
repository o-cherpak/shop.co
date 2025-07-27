import { BreadCrumbs } from "../components/categoryPage/BreadCrumbs";
import { Header } from "../components/Header/Header";
import { TopSingUp } from "../components/Header/TopSingUp";
import { ClickedProductSection } from "../components/productPage/ClickedProductSection";

export function ProductPage() {
  return (
    <div>
      <TopSingUp />

      <Header />

      <BreadCrumbs />

      <ClickedProductSection
        product={{
          id: 0,
          title: "Denim Jacket",
          description: "Classic blue denim jacket for casual wear",
          type: ["Body", "casual"],
          price: 89.99,
          discount: 15,
          priceWithDiscount: 76.49,
          colors: ["blue", "black"],
          size: ["S", "M", "L", "XL"],
        }}
      />
    </div>
  );
}
