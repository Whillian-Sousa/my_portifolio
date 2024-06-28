import React from "react";
import GsapMagnetic from "./GsapMagnetic";

const MagneticButton = ({ id, url, iconUrl, title, footer }) => {
  return (
    <div className="">
      <GsapMagnetic key={id}>
        <div
          className={`relative flex w-fit ${id ? "py-5" : "scale-[1] sm:scale-105 md:scale-[1.15] lg:scale-125"}`}
        >
          <a
            href={url}
            target="_blank"
            className={`flex relative items-center justify-center rounded-full transition-colors hover:animate-spin-slow group ${id ? "size-[2.3rem] sm:size-[3rem] xl:size-[5rem]" : "size-[5rem] "}`}
          >
            <div
              className={`absolute z-0 rounded-full bg-color-7 scale-0 transition-all duration-500 size-[8rem] group-hover:scale-100 ${id ? "opacity-20" : ""}`}
            />
            <div
              className={`absolute z-0 rounded-full opacity-50 size-[8rem] ${id ? "" : "border"}`}
            />
            <img
              className={`absolute group-hover:animate-despin  ${id ? "max-sm:scale-90" : "mix-blend-difference"}`}
              src={iconUrl}
              width={30}
              height={30}
              alt={title}
            />
            <svg
              className={`absolute z-1 scale-[0.275] group-hover:opacity-100 transition-all duration-700 group-hover: pointer-events-none ${id ? "opacity-0" : "mix-blend-difference"}`}
              width="640"
              height="480"
            >
              <path
                id="curve"
                fill="none"
                stroke="none"
                d="M112 239.5a207.5 207.5 0 1 0 415 0a207.5 207.5 0 1 0 -415 0"
              />
              <text
                className="text-[46px] font-lexend font-light tracking-widest uppercase"
                style={{ fill: "beige" }}
              >
                {[...Array(4)].map((_, i) => {
                  return (
                    <textPath key={i} href="#curve" startOffset={i * 25 + "%"}>
                      {title}
                    </textPath>
                  );
                })}
              </text>
            </svg>
          </a>
        </div>
      </GsapMagnetic>
    </div>
  );
};

export default MagneticButton;
