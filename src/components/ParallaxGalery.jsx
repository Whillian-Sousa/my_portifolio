import React, { useEffect, useRef } from "react";
import { logos, space } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxGalery() {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "top bottom",
          end: "bottom end",
          scrub: 2,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          y: (id) => {
            return id % 2 === 0
              ? gsap.utils.random(300, 200)
              : gsap.utils.random(-300, -200);
          },
        },
        {
          y: (id) => {
            return id % 2 === 0
              ? gsap.utils.random(-300, -200)
              : gsap.utils.random(300, 200);
          },
          // ease: "power1.inOut",
        },
      );
    }, component);
    return () => ctx.revert(); //Cleanup!
  }, []);

  return (
    <div
      ref={component}
      className="relative h-[45vh] flex flex-row px-[3vw] gap-[1vw] overflow-hidden "
    >
      <Column space={[space[1], space[0], space[2], space[3]]} />
      <Column space={[space[6], space[7], space[4], space[5]]} />
    </div>
  );
}

const Column = ({ space }) => {
  return (
    <div className="tech-row w-[50%] flex flex-col items-center justify-center gap-[1vw]">
      {space.map((logo, index) => (
        <img
          key={index}
          className="w-full h-full relative rounded-lg saturate-50 opacity-70"
          src={logo}
          width={54}
          height={28}
          alt={logo}
        />
      ))}
    </div>
  );
};
