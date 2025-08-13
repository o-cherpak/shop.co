import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

export function BreadCrumbs() {
  const location = useLocation();

  let currentPath = "";

  const crumbs = decodeURI(location.pathname)
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      currentPath += `/${crumb}`;

      return (
        <span key={crumb} className="text-black flex items-center">
          <Link to={currentPath} className="text-black hover:text-black">
            {crumb}
          </Link>
          {index < crumb.length - 1 && (
            <span className="">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-black/80 text-sm mx-1"
              />
            </span>
          )}
        </span>
      );
    });

  return (
    <div className="flex items-center gap-2 text-lg text-black/60 font-medium after:mx-1 px-2 lg:px-26 py-4">
      <Link className="text-lg text-black/60" to={"/"}>
        Home{" "}
        <span>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-sm text-black/80"
          />
        </span>
      </Link>

      {crumbs}
    </div>
  );
}
