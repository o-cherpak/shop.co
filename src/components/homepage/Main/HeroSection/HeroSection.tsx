import { AchievementCards } from "./AchievementCards";
import { Images } from "./Images";
import { TextContainer } from "./TextContainer";

export function HeroSection() {
  return (
    <section className="bg-gray-150 pt-8 flex flex-col md:flex-row xl:pr-24">
      <div className="flex flex-col px-2 gap-6 xl:justify-center lg:items-center">
        <TextContainer />

        <AchievementCards />
      </div>

      <Images />
    </section>
  );
}
