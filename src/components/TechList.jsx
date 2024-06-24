import React, { useEffect, useRef } from "react";
import { techList } from "../constants";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechList = () => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "top bottom",
          end: "bottom end",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (id) => {
            return id % 2 === 0
              ? gsap.utils.random(300, 200)
              : gsap.utils.random(-300, -200);
          },
        },
        {
          x: (id) => {
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
      className="overflow-hidden before:z-2 before:bg-linear-slide-l before:h-[100%] before:w-[100px] md:before:w-[175px] xl:before:w-[250px] before:content-[''] before:absolute before:overflow-hidden before:top-0
        after:z-2 after:bg-linear-slide-r after:h-[100%] after:w-[100px] md:after:w-[175px] xl:after:w-[250px] after:content-[''] after:absolute after:overflow-hidden after:top-0 after:right-0"
      ref={component}
    >
      {techList.map(({ name, color }, id) => (
        <div
          className="tech-row mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 flex items-center justify-center gap-4 text-n-12"
          key={id}
          aria-label={name || undefined}
        >
          {Array.from({ length: 15 }, (_, id) => (
            <React.Fragment key={id}>
              <span
                className="tech-item text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter font-lexend"
                style={{
                  color: id === 7 && color ? color : "inherit",
                }}
              >
                {name}
              </span>
              <span className="text-xs md:text-sm lg:text-xl xl:text-2xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};
export default TechList;
