import { Link } from "react-router-dom";

export function ListLinks() {
  return (
    <ul className="hidden lg:flex items-center gap-6">
      
      <Link to="/CategoryPage">
        <li className="text-lg">Shop</li>
      </Link>

      <a href="/">
        <li className="text-lg">On Sale</li>
      </a>

      <a href="/">
        <li className="text-lg">New Arrivals</li>
      </a>
      
      <a href="/">
        <li className="text-lg">Brands</li>
      </a>
    </ul>
  );
}
