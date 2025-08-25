import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Navigation} from "./Navigation";
import {ListLinks} from "./ListLinks";
import {MobileLinks} from "./MobileLinks.tsx";
import {useState} from "react";
import {Link} from "react-router-dom";
import {hoverTextColor} from "../../constants/colors.ts";

export function Header() {
  const [toggleMenuButton, setToggleMenuButton] = useState(false);

  return (
    <header className="flex justify-between lg:justify-around lg:gap-12 py-4 px-4 border-b border-2 border-gray-200 ">
      <div className="relative flex gap-2 md:gap-4 lg:gap-6">
        <button className="flex lg:hidden text-xl items-center pt-1 lg:pt-[1px]">
          <FontAwesomeIcon icon={faBars} onClick={() => setToggleMenuButton(!toggleMenuButton)}/>
        </button>

        <Link to={`/`}>
          <h2
            className={`font-extrabold text-2xl lg:text-3xl font-internal transition-all duration-200 ease-out hover:scale-110
              ${hoverTextColor} active:scale-95 cursor-pointer`}
          >
            SHOP.CO
          </h2>
        </Link>


        <ListLinks/>

        {toggleMenuButton && <MobileLinks/>}
      </div>

      <Navigation/>
    </header>
  );
}
