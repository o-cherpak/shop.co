export function Images() {
  return (
    <div className="relative">
      <img src="images/hero-lg.svg" alt="hero-image" className="h-full" />

      <img
        src="images/rhombus.svg"
        alt="rhombus"
        className="absolute top-30 left-4"
      />

      <img
        src="images/rhombus.svg"
        alt="rhombus"
        className="absolute top-8 right-6 h-20"
      />
    </div>
  );
}
