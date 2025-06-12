import type { Product } from "../../../../interfaces/Products";
import { ArrivalsCards } from "./ArrivalsCards";

type NewArrivalsSectionProps = {
  newProducts: Product[];
};

export function NewArrivalsSection({
  newProducts,
}: Readonly<NewArrivalsSectionProps>) {
  return (
    <section className="pt-12">
      <h2
        style={{ fontFamily: "Integral CF", fontWeight: "bold" }}
        className="text-4xl text-center pb-6"
      >
        NEW ARRIVALS
      </h2>

      <ArrivalsCards products={newProducts} />

      <div className="flex justify-center">
        <button className="w-full max-w-xs md:max-w-[200px] border border-black/40 p-2 rounded-3xl shadow-2xl">
          View All
        </button>
      </div>
    </section>
  );
}
