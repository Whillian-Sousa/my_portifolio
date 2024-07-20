import React from "react";
import { useFeatureStore } from "../hooks/store";
import classNames from "classnames";

const Card = ({ children, id }) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  return (
    <div
      className={classNames(
        "absolute inset-0 h-full w-full transition-opacity",
        inViewFeature === id ? "opacity-100" : "opacity-0",
      )}
    >
      <h1 className="grid place-content-center h-full text-6xl font-extrabold font-lexend text-transparent gradient-text text-center drop-shadow-lg">
        {children}
      </h1>
    </div>
  );
};

export const Scenes3d = ({ id }) => {
  return (
    <Card id={id}>
      <span className="h-full">3d scenes</span>
    </Card>
  );
};
export const Animations = ({ id }) => {
  return (
    <Card id={id}>
      <span className="h-full">Animations</span>
    </Card>
  );
};
export const Buttons = ({ id }) => {
  return (
    <Card id={id}>
      <span className="h-full">
        Buttons <br /> & Hovers
      </span>
    </Card>
  );
};
export const Scroll = ({ id }) => {
  return (
    <Card id={id}>
      <span className="h-full">
        Scroll <br /> everywhere
      </span>
    </Card>
  );
};
