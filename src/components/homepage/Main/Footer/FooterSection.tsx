type FooterSectionProps = {
  title: string;
  links: { name: string; link: string }[];
};

export function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div className="w-1/2 lg:w-1/4">
      <h4 className="pb-4 text-xl font-medium tracking-widest uppercase">
        {title}
      </h4>

      <div className="flex flex-col gap-2">
        {links.map((ob) => {
          return (
            <a href={ob.link} key={ob.name} className="text-black/60">
              {ob.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
