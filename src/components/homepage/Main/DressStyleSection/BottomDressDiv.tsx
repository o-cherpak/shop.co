import { DressCard } from "./DressCard";

export function BottomDressDiv() {
  return (
    <div>
      <DressCard title="Party" imgURL="/images/partyDress.png" />
      
      <DressCard title="Gym" imgURL="/images/gymDress.png"/>
    </div>
  );
}