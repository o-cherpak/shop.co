import CountUp from "react-countup";

type AchievementCardProps = {
  count: number;
  description: string;
  className?: string;
};

export function AchievementCard({count, description, className}: Readonly<AchievementCardProps>) {
  return (
    <div className={`p-2 ${className} flex flex-col`}>
      <h4 className="font-bold text-center lg:text-left lg:text-3xl">
        <CountUp end={count} duration={2}/>+
      </h4>

      <p className="text-sm text-black/60 lg:text-xl">{description}</p>
    </div>
  );
}
