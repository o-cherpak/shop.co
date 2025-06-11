type BrandTitleProps = {
  src: string;
  alt: string;
};

export function BrandTitle({ src, alt }: Readonly<BrandTitleProps>) {
  return <img src={src} alt={alt} className="h-6 lg:h-8" />;
}
