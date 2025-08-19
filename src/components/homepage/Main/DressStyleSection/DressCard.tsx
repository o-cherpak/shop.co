import {Link} from "react-router-dom";
import {useFilteredProductsStore} from "../../../../store/useFilteredProductsStore.ts";

type DressCardProps = {
  title: string;
  imgURL: string;
  widthMobile?: string;
  widthDesktop: string;
};

export function DressCard({ title, imgURL, widthDesktop }: Readonly<DressCardProps>) {
  const {setStyle} = useFilteredProductsStore();

  return (
    <Link
      to={"/CategoryPage"}
      onClick={() => setStyle(title.toLowerCase())}
      style={{ backgroundImage: `url(${imgURL})` }}
      className={`flex w-full ${widthDesktop} h-48 bg-cover bg-center rounded-2xl p-6 hover:scale-105 transition-transform duration-500`}
    >
      <h3 className="font-semibold text-2xl">{title}</h3>
    </Link>
  );
}
