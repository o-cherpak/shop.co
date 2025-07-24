import { Link, useLocation } from "react-router-dom";

export function BreadCrumbs() {
  const location = useLocation();

  let currentPath = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      currentPath += `/${crumb}`;

      return (
        <span key={crumb} className="text-black">
          <Link
            to={currentPath}
            className={`text-black hover:text-black ${
              index < currentPath.length - 1
            }
              ? ""
              : "after:content-['>'] after:mx-1 after:text-black"
            }`}
          >
            {crumb}
          </Link>
        </span>
      );
    });

  return (
    <div className="flex items-center gap-2 text-lg text-black/60 font-medium after:mx-1 px-2 lg:px-26 py-4 after:text-black">
      <Link
        className="text-lg text-black/60 after:text-black after:content-['>'] after:mx-1"
        to={"/"}
      >
        Home
      </Link>

      {crumbs}
    </div>
  );
}
