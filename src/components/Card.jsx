import React from "react";
import { useFeatureStore } from "../hooks/store";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

const Card = ({ children, id }) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  return (
    <motion.div
      // initial={{
      //   opacity: 0,
      //   y: 25,
      // }}
      // animate={{
      //   opacity: 1,
      //   y: 0,
      // }}
      className={classNames(
        "absolute inset-0 h-full w-full transition-opacity",
        inViewFeature === id ? "opacity-100" : "opacity-0",
      )}
    >
      <h1 className="grid place-content-center h-full text-6xl uppercase font-extrabold font-lexend text-transparent gradient-text text-center drop-shadow-2xl saturate-150">
        {children}
      </h1>
    </motion.div>
  );
};

const spanClasses =
  "h-full after:absolute after:inset-1 after:text-color-7/70 after:h-full after:place-content-center after:mix-blend-multiply";

export const Scenes3d = ({ id }) => {
  return (
    <AnimatePresence>
      <Card id={id}>
        <span
          className={classNames(spanClasses, "after:content-['3d_scenes']")}
        >
          3d scenes
        </span>
      </Card>
    </AnimatePresence>
  );
};
export const Animations = ({ id }) => {
  return (
    <AnimatePresence>
      <Card id={id}>
        <span
          className={classNames(spanClasses, "after:content-['Animations']")}
        >
          Animations
        </span>
      </Card>
    </AnimatePresence>
  );
};
export const Buttons = ({ id }) => {
  return (
    <AnimatePresence>
      <Card id={id}>
        <span
          className={classNames(
            spanClasses,
            "after:content-['Buttons_&_hovers']",
          )}
        >
          Buttons & hovers
        </span>
      </Card>
    </AnimatePresence>
  );
};
export const Scroll = ({ id }) => {
  return (
    <AnimatePresence>
      <Card id={id}>
        <span
          className={classNames(
            spanClasses,
            "after:content-['Scroll_everywhere']",
          )}
        >
          Scroll everywhere
        </span>
      </Card>
    </AnimatePresence>
  );
};
