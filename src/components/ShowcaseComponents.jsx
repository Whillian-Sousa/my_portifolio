import React from "react";
import Tagline from "./Tagline";
import { moon, star } from "../assets";

const ShowcaseComponents = ({
  date,
  status,
  title,
  text,
  children,
  gradient,
}) => {
  return (
    <div className="relative md:flex shadow-xl p-0.25 rounded-xl">
      <div className="relative p-8 rounded-xl overflow-hidden xl:p-15">
        <div className="absolute inset-0 mix-blend-lighten opacity-20 bg-texture bg-cover bg-center" />

        <div className="relative z-1">
          <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
            <Tagline>{date}</Tagline>

            <div className="absolute flex flex-col justify-center items-center right-0 top-0 text-n-1 gap-2">
              <img
                src={status === "Done" ? star : moon}
                alt={status}
                width={40}
                height={40}
              />
              <div className="tagline">{status}</div>
            </div>
          </div>

          <div className="relative h-[40vh] flex flex-col items-center justify-center -mx-15 gap-8">
            {children}
          </div>

          <h4 className="h4 m-2 my-5 font-lexend">
            <span className="text-transparent gradient-text">{gradient}</span>
            {title}
          </h4>
          <p className="body-2 text-n-4 font-lexend">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseComponents;
