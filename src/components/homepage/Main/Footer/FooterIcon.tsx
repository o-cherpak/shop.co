import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type FooterIconsProps = {
  route: string;
  icon: IconProp;
  className?: string;
};

export function FooterIcon({
  route,
  icon,
  className = "",
}: Readonly<FooterIconsProps>) {
  return (
    <a
      href={route}
      className={`flex text-xl rounded-full border-2 border-gray-300 p-2 transition-colors duration-20 text-black ${
        className ? "bg-black text-white" : "bg-white"
      } `}
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}
