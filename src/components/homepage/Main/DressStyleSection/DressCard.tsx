type DressCardProps = {
  title: string;
  imgURL: string;
  widthMobile?: string;
  widthDesktop: string;
};

export function DressCard({ title, imgURL, widthDesktop }: Readonly<DressCardProps>) {
  return (
    <a
      href="/"
      style={{ backgroundImage: `url(${imgURL})` }}
      className={`flex w-full ${widthDesktop} h-48 bg-cover bg-center rounded-2xl p-6`}
    >
      <h3 className="font-semibold text-2xl">{title}</h3>
    </a>
  );
}
