import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Navigation} from "./Navigation";
import {ListLinks} from "./ListLinks";
import {MobileLinks} from "./MobileLinks.tsx";
import {useState} from "react";

export function Header() {
  const [toggleMenuButton, setToggleMenuButton] = useState(false);

  return (
    <header className="flex justify-between lg:justify-around lg:gap-12 py-4 px-4 border-b border-2 border-gray-200 ">
      <div className="relative flex gap-2 md:gap-4 lg:gap-6">
        <button className="flex lg:hidden text-xl items-center pt-1 lg:pt-[1px]">
          <FontAwesomeIcon icon={faBars} onClick={() => setToggleMenuButton(!toggleMenuButton)}/>
        </button>

        <h2
          style={{fontFamily: "Integral CF"}}
          className="font-extrabold text-2xl lg:text-3xl"
        >
          SHOP.CO
        </h2>

        <ListLinks/>

        {toggleMenuButton && <MobileLinks/>}
      </div>

      <Navigation/>
    </header>
  );
}
