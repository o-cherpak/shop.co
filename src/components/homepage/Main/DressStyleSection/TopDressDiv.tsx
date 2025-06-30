import { DressCard } from "./DressCard";

export function TopDressDiv() {
  return (
    <div>
      <DressCard title="Casual" imgURL="/images/casualDress.png" />
      
      <DressCard title="Formal" imgURL="/images/formalDress.png"/>
    </div>
  );
}