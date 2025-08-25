import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import {gsap} from "gsap";

type BrandTitleProps = {
  src: string;
  alt: string;
};

export function BrandTitle({src, alt}: Readonly<BrandTitleProps>) {
  const imageBrand = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (imageBrand.current) {
      gsap.fromTo(
        imageBrand.current,
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 3,
          ease: "power1.out"
        }
      );
    }
  });


  return <img src={src} alt={alt} ref={imageBrand} className="h-6 lg:h-8"/>;
}
