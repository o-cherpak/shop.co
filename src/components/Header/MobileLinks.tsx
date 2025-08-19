
export function MobileLinks() {
  const links = [
    {title: "Shop", link: "/CategoryPage"},
    {title: "On Sale", link: "/CategoryPage"},
    {title: "New Arrivals", link: "/CategoryPage"},
    {title: "Brands", link: "/CategoryPage"}
  ];

  return (
    <div className="absolute lg:flex top-12 right-4 w-full bg-white shadow-lg rounded-b-2xl px-4 py-2 z-10">
      <ul className="space-y-3">
        {links.map((item, index) => (
          <li
            key={index}
            className="text-lg font-medium text-black/80 hover:font-bold cursor-pointer transition-colors"
          >
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
