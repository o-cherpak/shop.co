import { BrandTitle } from "./BrandTitle";

export function BrandSection() {
  return (
    <div className="bg-black flex flex-col lg:flex-row py-8 gap-6 lg:gap-10 xl:gap-24 justify-center">
      <div className="flex justify-around lg:gap-10 xl:gap-24">
        <BrandTitle src="/images/versaci.svg" alt="Versace" />

        <BrandTitle src="/images/zara.svg" alt="Zara" />

        <BrandTitle src="/images/gucci.svg" alt="Gucci" />
      </div>

      <div className="flex justify-around lg:gap-10 xl:gap-24">
        <BrandTitle src="/images/prada.svg" alt="Prada" />

        <BrandTitle src="/images/ck.svg" alt="Calvin Klein" />
      </div>
    </div>
  );
}
