import React, { useEffect, useRef } from "react";
import Tagline from "./Tagline";
import { moon, star } from "../assets";
import {
  useMotionValue,
  useSpring,
  useTransform,
  motion,
  useInView,
} from "framer-motion";
import { useFeatureStore } from "../hooks/store";

const TiltCard = ({ id, date, status, title, text, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
  }, [isInView, id, setInViewFeature]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["10.5deg", "-10.5deg"],
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-10.5deg", "10.5deg"],
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    e.currentTarget.style.setProperty("--x", `${xPct * 300}%`);
    e.currentTarget.style.setProperty("--y", `${yPct * 300}%`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      id={id}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative border border-n-6 h-[66vh] lg:h-[70vh] xl:h-[74vh] rounded-2xl"
    >
      <div className="absolute inset-0 opacity-10 bg-noisy-texture bg-cover bg-center rounded-2xl" />
      <div
        style={{
          transform: "translateZ(75px)",
          transfromStyle: "preserve-3d",
        }}
        className="absolute inset-4 sm:inset-6 place-content-center p-5 md:p-7 lg:p-7 xl:p-10 rounded-2xl group"
      >
        <div className="">
          <div className="absolute inset-0 mix-blend-lighten opacity-20 bg-grainy-texture bg-cover bg-center rounded-2xl" />
          <div
            style={{
              transform: "translateZ(75px)",
            }}
            className="relative flex items-center justify-between mb-10 md:mb-20"
          >
            <Tagline>{date}</Tagline>

            <div className="absolute scale-75 lg:scale-100 flex flex-col justify-center items-center -right-3 -top-3 sm:-right-2 sm:-top-2 text-n-1 gap-2">
              <img
                src={status === "Done" ? star : moon}
                alt={status}
                width={40}
                height={40}
              />
              <div className="tagline">{status}</div>
            </div>
          </div>
          <div
            style={{
              transform: "translateZ(50px)",
            }}
            className="md:-mx-15 overflow-hidden"
          >
            {children}
          </div>
          <h4
            style={{
              transform: "translateZ(50px)",
            }}
            className="h3 my-3 lg:my-5 font-lexend leading-tight"
          >
            <span className="text-transparent gradient-text">{title}</span>
          </h4>
          <p
            style={{
              transform: "translateZ(50px)",
            }}
            className="body-2 text-color-7/50 font-lexend line-clamp-2 lg:line-clamp-none"
          >
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default TiltCard;
