import { DressCard } from "./DressCard";

export function BottomDressDiv() {
  return (
    <div className="pt-6 flex flex-col md:flex-row gap-6 justify-center w-full md:w-1/2 ">
      <DressCard title="Party" imgURL="/images/partyDress.png" widthDesktop="md:w-2/3" />
      
      <DressCard title="Gym" imgURL="/images/gymDress.png" widthDesktop="md:w-1/3"/>
    </div>
  );
}