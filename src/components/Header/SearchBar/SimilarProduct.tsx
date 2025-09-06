import {Link} from "react-router-dom";
import type {Product} from "../../../interfaces/Products.ts";

type SimilarProductProps = {
  product: Product;
}

export function SimilarProduct({product}: Readonly<SimilarProductProps>) {
  let productId = product.id;

  if (productId > 11) productId = productId - 12;

  return (
    <li
      key={product.id}
      className="p-3 cursor-pointer hover:bg-blue-50 transition-colors"
    >
      <Link to={`/CategoryPage/${product.title}`} className={"flex items-center gap-6 justify-between"}>
        <p>{product.title}</p>

        <img
          src={`/images/clothes${productId + 1}.png`}
          alt={product.title}
          className="rounded w-8"
        />
      </Link>
    </li>
  )
}