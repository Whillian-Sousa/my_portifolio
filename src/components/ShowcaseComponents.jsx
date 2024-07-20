import React, { useEffect, useRef } from "react";
import Tagline from "./Tagline";
import { moon, star } from "../assets";
import { useInView } from "framer-motion";
import { useFeatureStore } from "../hooks/store";

const ShowcaseComponents = ({
  id,
  date,
  status,
  title,
  text,
  children,
  gradient,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
  }, [isInView, id, setInViewFeature]);

  return (
    <div ref={ref} className="shadow-xl rounded-xl">
      <div className="relative p-7 md:p-10 lg:p-12 xl:p-15 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 mix-blend-lighten opacity-20 bg-grainy-texture bg-cover bg-center" />

        <div className="relative">
          <div className="flex items-center justify-between mb-10 md:mb-20">
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

          <div className="relative h-[40vh] lg:h-[45vh] xl:h-[40vh] flex flex-col items-center justify-center md:-mx-15 gap-14 sm:gap-16 md:gap-20">
            {children}
          </div>

          <h4 className="h3 my-3 lg:my-5 font-lexend leading-none whitespace-nowrap">
            <span className="text-transparent gradient-text">{gradient}</span>
            {title}
          </h4>
          <p className="body-2 text-n-4 font-lexend line-clamp-2 lg:line-clamp-none">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseComponents;
