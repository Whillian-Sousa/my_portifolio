import { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";

const CircleLetters = ({ progress }) => {
  const texts = useRef([]);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      texts.current.forEach((text, i) => {
        text.setAttribute("startOffset", -100 + i * 99 + e * 200 + "%");
      });
    });
  }, []);

  return (
    <div className="relative">
      <svg
        className="absolute left-15 top-[14.7rem] scale-125 origin-right"
        width="640"
        height="480"
      >
        <path
          id="curve"
          fill="none"
          stroke="none"
          d="M112 239.5a207.5 207.5 0 1 0 415 0a207.5 207.5 0 1 0 -415 0"
        />
        <motion.text
          rotation-y={progress}
          rotation-x={progress}
          className="text-[2.72rem] opacity-50 font-bold uppercase font-lexend"
          style={{ fill: "#FF98E2" }}
        >
          {[...Array(2)].map((_, i) => {
            return (
              <textPath
                key={i}
                ref={(ref) => (texts.current[i] = ref)}
                href="#curve"
                startOffset={i * 40 + "%"}
              >
                {" "}
                3d scenes - animations - buttons - scroll-stuff -
              </textPath>
            );
          })}
        </motion.text>
      </svg>
    </div>
  );
};

export default CircleLetters;
