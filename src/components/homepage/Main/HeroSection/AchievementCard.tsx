type AchievementCardProps = {
  title: string;
  description: string;
  className?: string;
};

export function AchievementCard({
  title,
  description,
  className,
}: Readonly<AchievementCardProps>) {
  return (
    <div className={`p-2 ${className} flex flex-col`}>
      <h4 className="font-bold text-center lg:text-left lg:text-3xl">{title}</h4>

      <p className="text-sm text-black/60 lg:text-xl">{description}</p>
    </div>
  );
}
