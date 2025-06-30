type DressCardProps = {
  title: string;
  imgURL: string;
};

export function DressCard({ title, imgURL }: Readonly<DressCardProps>) {
  return (
    <a
      href="/"
      style={{ backgroundImage: `url(${imgURL})` }}
      className="bg-cover bg-center flex"
    >
      <h3>{title}</h3>
    </a>
  );
}
