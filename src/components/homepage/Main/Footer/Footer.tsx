import { FooterBottom } from "./FooterBottom";
import { FooterIcons } from "./FooterIcons";
import { FooterSections } from "./FooterSections";

export function Footer() {
  return (
    <footer className="pt-10 p-4 ">
      <div className="lg:flex gap-4 lg:justify-evenly lg:items-start lg:gap-20 pb-10">
        <div className="lg:w-1/5 flex flex-col gap-4">
          <h3
            style={{ fontFamily: "Integral CF" }}
            className="font-extrabold text-3xl lg:text-4xl"
          >
            SHOP.CO
          </h3>

          <p className="text-black/60">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>

          <FooterIcons />
        </div>

        <FooterSections />
      </div>

      <FooterBottom />
    </footer>
  );
}
