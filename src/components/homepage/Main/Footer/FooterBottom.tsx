export function FooterBottom() {
  return (
    <div className="lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 py-4 relative before:absolute before:top-0 before:left-0 before:content-[''] before:w-full before:h-[2px] before:bg-gray-300">
      <p className="text-black/60 text-center lg:text-left">
        Shop.co © 2000-2023, All Rights Reserved
      </p>

      <div className="flex justify-center items-center gap-2 lg:gap-4">
          <img src="../images/cards/Badge-0.svg" alt="card-picture" />
          
        <img src="../images/cards/Badge-1.svg" alt="card-picture" />

        <img src="../images/cards/Badge-2.svg" alt="card-picture" />

        <img src="../images/cards/Badge-3.svg" alt="card-picture" />

        <img src="../images/cards/Badge-4.svg" alt="card-picture" />
      </div>
    </div>
    </div>
  );
}
