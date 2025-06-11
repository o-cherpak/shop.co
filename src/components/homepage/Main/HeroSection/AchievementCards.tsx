import { AchievementCard } from "./AchievementCard";

export function AchievementCards() {
  return (
    <div className="flex flex-wrap justify-center pb-10">
      <AchievementCard
        title="200+"
        description="International Brands"
        className="pr-6"
      />

      <AchievementCard
        title="2,000+"
        description="High-Quality Products"
        className="px-6 relative before:absolute before:left-0 before:top-2 before:h-[calc(100%-1rem)] before:w-[2px] before:bg-gray-300"
      />

      <AchievementCard
        title="30,000+"
        description="Happy Customers"
        className="lg:pl-6 relative lg:before:absolute before:left-0 before:top-2 before:h-[calc(100%-1rem)] before:w-[1.5px] before:bg-gray-300"
      />
    </div>
  );
}
