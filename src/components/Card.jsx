import React, { useEffect } from "react";
import { useFeatureStore } from "../hooks/store";
import classNames from "classnames";
import {
  AnimatePresence,
  motion,
  useAnimate,
  usePresence,
} from "framer-motion";

const Card = ({ children, id }) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!isPresent) {
      const exitAnimation = async () => {
        await animate(scope.current, {
          opacity: 0,
          x: 24,
          ease: "easeIn",
        });

        safeToRemove();
      };

      exitAnimation();
    }
  }, [isPresent]);

  return (
    <div
      ref={scope}
      className={classNames(
        "absolute inset-0 h-full w-full transition-opacity",
        inViewFeature === id ? "active-card opacity-100" : "opacity-0",
      )}
    >
      <h1 className="hidden md:grid place-content-center h-full md:text-5xl lg:text-6xl uppercase font-extrabold font-lexend text-transparent gradient-text text-center drop-shadow-lg saturate-150">
        {children}
      </h1>
    </div>
  );
};

const spanClasses =
  "h-full after:absolute after:inset-1 after:text-color-7/70 after:h-full after:place-content-center after:mix-blend-multiply after:drop-shadow-lg";

export const Scenes3d = ({ id }) => {
  return (
    <Card id={id}>
      <span className={classNames(spanClasses, "after:content-['3d_scenes']")}>
        3d scenes
      </span>
    </Card>
  );
};
export const Animations = ({ id }) => {
  return (
    <Card id={id}>
      <span className={classNames(spanClasses, "after:content-['Animations']")}>
        Animations
      </span>
    </Card>
  );
};
export const Buttons = ({ id }) => {
  return (
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
  );
};
export const Scroll = ({ id }) => {
  return (
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
  );
};
