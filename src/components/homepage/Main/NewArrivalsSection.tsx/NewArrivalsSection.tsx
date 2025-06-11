import type { Product } from "../../../../interfaces/Products";
import { ArrivalsCard } from "./ArrivalsCard";

type NewArrivalsSectionProps = {
  newProducts: Product[];
};

export function NewArrivalsSection({
  newProducts,
}: Readonly<NewArrivalsSectionProps>) {
  return (
    <section>
      <h2
        style={{ fontFamily: "Integral CF", fontWeight: "bold" }}
        className=""
      >
        NEW ARRIVALS
      </h2>

      {newProducts.map((product: Product, i: number) => (
        <ArrivalsCard product={product} key={i} />
      ))}
    </section>
  );
}
