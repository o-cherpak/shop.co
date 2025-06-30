import { DressCard } from "./DressCard";

export function TopDressDiv() {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full md:w-1/2 ">
      <DressCard
        title="Casual"
        imgURL="/images/casualDress.png"
        widthDesktop="md:w-1/3"
      />

      <DressCard
        title="Formal"
        imgURL="/images/formalDress.png"
        widthDesktop="md:w-2/3"
      />
    </div>
  );
}
