import { AchievementCard } from "./AchievementCard";

export function HeroSection() {
  return (
    <section className="bg-gray-150 pt-8 flex flex-col md:flex-row xl:pr-24">
      <div className="flex flex-col px-2 gap-6 xl:justify-center lg:items-center">
        <div className="flex flex-col px-2 gap-4 lg:w-1/2">
          <h1
            style={{ fontFamily: "Integral CF", fontWeight: "bold" }}
            className="text-bold text-4xl lg:text-5xl"
          >
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>

          <p className="text-black/60 pb-2">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <button className="bg-black text-base text-white py-2 p-4 lg:px-6 rounded-3xl lg:w-44">
            Shop Now
          </button>
        </div>

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
      </div>

      <div className="relative">
        <img src="images/hero-lg.svg" alt="hero-image" className="h-full" />

        <img
          src="images/rhombus.svg"
          alt="rhombus"
          className="absolute top-30 left-4"
        />

        <img
          src="images/rhombus.svg"
          alt="rhombus"
          className="absolute top-8 right-6 h-20"
        />
      </div>
    </section>
  );
}
