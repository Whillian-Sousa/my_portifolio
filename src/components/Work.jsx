import { useRef } from "react";
import { moon, star } from "../assets";
import { roadmap } from "../constants";
import Section from "./Section";
import Tagline from "./Tagline";
import Blurry from "./Blurry";

const Work = () => {
  const parallaxRef = useRef();
  return (
    <Section id="work" className="overflow-hidden">
      <div className="container md:pt-24" ref={parallaxRef}>
        <h2 className="h2 font-lexend font-bold capitalize text-center mb-20 text-color-7">
          Choose <span className="text-color-1">the best</span> for your project
        </h2>

        <Blurry className="absolute scale-125 top-[35.25rem] left-[35.375rem] w-[56.625rem] opacity-50 pointer-events-none" />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                key={item.id}
                className={`md:flex shadow-xl group even:md:mt-[7rem] even:md:-mb-[7rem] p-0.25 rounded-xl ${item.colorful ? "bg-linear-gradient" : ""}`}
              >
                <div
                  className={`relative p-8 rounded-xl overflow-hidden xl:p-15 ${item.colorful ? "bg-n-8/95" : ""}`}
                >
                  <div className="absolute top-0 left-0">
                    <div className="w-[50rem] mix-blend-overlay second:mix-blend-overlay filter saturate-25 opacity-50 bg-texture bg-cover bg-center h-[50rem]" />
                  </div>

                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>{item.date}</Tagline>

                      <div className="absolute flex flex-col justify-center items-center right-0 top-0 text-n-1 gap-2">
                        <img
                          className="hover:-rotate-12 hover:transition-transform hover:ease-in-out"
                          src={item.status === "done" ? star : moon}
                          alt={status}
                          width={40}
                          height={40}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        width={630}
                        height={420}
                      />
                    </div>

                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Work;
