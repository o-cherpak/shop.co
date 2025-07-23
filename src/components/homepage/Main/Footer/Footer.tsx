import { FooterIcons } from "./FooterIcons";

export function Footer() {
  return (
    <footer className="py-10 p-4">
      <div className="flex flex-col gap-4">
        <h3
          style={{ fontFamily: "Integral CF" }}
          className="font-extrabold text-3xl lg:text-3xl"
        >
          SHOP.CO
        </h3>

        <p className="text-black/60">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
      </div>

      <FooterIcons />
    </footer>
  );
}
