import {Link} from "react-router-dom";
import {useSortingStore} from "../../store/useSortingStore.ts";

export function ListLinks() {
  const {setSortingOption} = useSortingStore();

  const StyleForNavigationHoverAndActive = "after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] " +
    "after:bg-black transition-all after:duration-500 hover:after:w-full after:rounded-full active:scale-95";


  return (
    <ul className="hidden lg:flex items-center gap-6">

      <Link to="/CategoryPage" onClick={() => setSortingOption("Default")}>
        <li className={`relative text-lg cursor-pointer ${StyleForNavigationHoverAndActive}`}>Shop</li>
      </Link>

      <Link to="/CategoryPage">
        <li className={`relative text-lg cursor-pointer ${StyleForNavigationHoverAndActive}`}>On Sale</li>
      </Link>

      <Link to="/CategoryPage" onClick={() => setSortingOption("New products")}>
        <li className={`relative text-lg cursor-pointer ${StyleForNavigationHoverAndActive}`}>New Arrivals</li>
      </Link>

      <Link to="/CategoryPage">
        <li className={`relative text-lg cursor-pointer ${StyleForNavigationHoverAndActive}`}>Brands</li>
      </Link>
    </ul>
  );
}
