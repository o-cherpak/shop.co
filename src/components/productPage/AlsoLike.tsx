import {CardSection} from "../homepage/Main/CardSection/CardSection.tsx";
import type {Product} from "../../interfaces/Products.ts";

type AlsoLikeProps = {
  products: Product[];
}

export function AlsoLike({products}: AlsoLikeProps) {
  const displayedCards = products.slice(0, 4);

  return (
    <div className={"pb-14"}>
      <CardSection products={displayedCards} title={"You might also like"}/>
    </div>
  )
}