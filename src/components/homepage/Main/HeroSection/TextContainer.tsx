export function TextContainer() {
  return (
    <div className="flex flex-col px-2 gap-4 lg:w-1/2">
      <h1
        style={{ fontFamily: "Integral CF", fontWeight: "bold" }}
        className="text-bold text-4xl lg:text-5xl"
      >
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </h1>

      <p className="text-black/60 pb-2">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </p>

      <button className="bg-black text-base text-white py-2 p-4 lg:px-6 rounded-3xl lg:w-44">
        Shop Now
      </button>
    </div>
  );
}
