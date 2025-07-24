import type { Product } from "../../../../interfaces/Products";
import { Cards } from "./Cards";

type NewArrivalsSectionProps = {
  products: Product[];
  title: string;
};

export function CardSection({ products, title }: Readonly<NewArrivalsSectionProps>) {
  return (
    <section className="pt-12">
      <h2
        style={{ fontFamily: "Integral CF", fontWeight: "bold" }}
        className="text-4xl text-center pb-6"
      >
        {title}
      </h2>

      <Cards products={products} />

      <div className="flex justify-center">
        <button className="mt-1 w-full max-w-xs md:max-w-[200px] border border-black/40 p-2 rounded-3xl shadow-2xl">
          View All
        </button>
      </div>
    </section>
  );
}
