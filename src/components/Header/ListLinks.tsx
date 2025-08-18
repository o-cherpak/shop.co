import { Link } from "react-router-dom";
import {useSortingStore} from "../../store/useSortingStore.ts";

export function ListLinks() {
  const {setSortingOption} = useSortingStore();

  return (
    <ul className="hidden lg:flex items-center gap-6">
      
      <Link to="/CategoryPage" onClick={() => setSortingOption("Default")}>
        <li className="text-lg">Shop</li>
      </Link>

      <Link to="/CategoryPage">
        <li className="text-lg">On Sale</li>
      </Link>

      <Link to="/CategoryPage" onClick={() => setSortingOption("New products")}>
        <li className="text-lg">New Arrivals</li>
      </Link>

      <Link to="/CategoryPage">
        <li className="text-lg">Brands</li>
      </Link>
    </ul>
  );
}
