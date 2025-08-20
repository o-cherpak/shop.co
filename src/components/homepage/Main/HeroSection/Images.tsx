import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Images() {

  useGSAP(() => {
    gsap.from('#rhombus-left',{
      y: -200,
      opacity: 0,
      duration: 1.6,
    });

    gsap.from('#rhombus-right',{
      y: -100,
      opacity: 0,
      duration: 1.6,
    });
  });

  return (
    <div className="relative">
      <img src="/images/hero-lg.svg" alt="hero-image" className="h-full"/>

      <img
        id={"rhombus-left"}
        src="/images/rhombus.svg"
        alt="rhombus"
        className="absolute top-30 left-4 opacity-100"
      />

      <img
        id={"rhombus-right"}
        src="/images/rhombus.svg"
        alt="rhombus"
        className="absolute top-8 right-6 h-20 opacity-100"
      />
    </div>
  );
}
