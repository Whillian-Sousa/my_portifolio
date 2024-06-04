import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const MoonTitles = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["11%", "-73%"]);

  return (
    <div className="absolute inset-0 z-1">
      <div ref={targetRef} className="relative flex justify-center h-[490vh]">
        <div className="sticky top-0 w-[25rem] flex h-screen items-center overflow-hidden">
          <motion.ul
            style={{ x }}
            className="flex h-full w-fit items-center justify-start text-color-4 text-6xl font-lexend font-bold"
          >
            <li className="w-[30vw] text-nowrap">
              <span>3D scenes</span>
            </li>
            <li className="w-[30vw]">
              <span>Animations</span>
            </li>
            <li className="w-[30vw]">
              <span>Buttons</span>
            </li>
            <li className="w-[30vw]">
              <span>Buttons</span>
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default MoonTitles;
