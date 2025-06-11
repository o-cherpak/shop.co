import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation } from "./Navigation";
import { ListLinks } from "./ListLinks";

export function Header() {
  return (
    <header className="flex justify-between lg:justify-around lg:gap-12 py-4 px-4 border-b-2 border-amber-300">
      <div className="flex gap-2 md:gap-4 lg:gap-6">
        <button className="flex lg:hidden text-xl items-center pt-1 lg:pt-[1px]">
          <FontAwesomeIcon icon={faBars} />
        </button>

        <h2
          style={{ fontFamily: "Integral CF" }}
          className="font-extrabold text-2xl lg:text-3xl"
        >
          SHOP.CO
        </h2>

        <ListLinks />
      </div>

      <Navigation />
    </header>
  );
}
