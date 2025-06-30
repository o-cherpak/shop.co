import { BottomDressDiv } from "./BottomDressDiv";
import { TopDressDiv } from "./TopDressDiv";

export function DressStyleSection() {
  return (
    <section className="mx-2 mt-10 px-6 py-10 flex flex-col justify-center items-center bg-gray-150 rounded-2xl">
      <h2
        style={{ fontFamily: "Integral CF", fontWeight: "bold" }}
        className="text-4xl text-center pb-6"
      >
        BROWSE BY DRESS STYLE
      </h2>

      <TopDressDiv />

      <BottomDressDiv />
    </section>
  );
}
