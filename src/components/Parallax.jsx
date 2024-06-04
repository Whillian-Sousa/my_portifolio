"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { roadmap } from "../constants";
import Tagline from "./Tagline";
import { moon, star } from "../assets";
import Heading from "./Heading";
import Blurry from "./Blurry";
import { useRef } from "react";

const ScrollAnimation = () => {
  const container = useRef();

  // const position = useTransform(scrollYProgress, (pos) => {
  //   return pos >= 1 ? "relative" : "fixed";
  // });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="container h-full py-10 lg:py-16 xl:py-20">
      {/* <Heading */}
      {/*   className="" */}
      {/*   title="Choose the best for your project" */}
      {/*   tag="What i'm working on" */}
      {/* /> */}
      {/* container */}
      <div className="border h-full overflow-scroll no-scrollbar lg:flex">
        {/* static */}
        <div className="border hidden sticky top-0 w-full lg:block z-30 xl:1/2">
          <motion.div
            style={{ scale }}
            className="flex items-center w-full h-screen"
          >
            <Heading
              className=""
              title="Beaultiful Uis"
              text="Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free."
            />
          </motion.div>
          <Blurry className="absolute scae-125 -top-[45.25rem] left-[35.375rem] w-[56.625rem] opacity-50 pointer-events-none" />
        </div>
        {/* motion */}
        <div className="relative border-0 h-screen flex flex-col sm:px-3 md:px-4 lg:px-8 xl:px-24 xl:1/2">
          <div className="sticky flex flex-col gap-6 py-28 md:gap-28 md:pb-[7rem]">
            {roadmap.map((item) => {
              const status = item.status === "done" ? "Done" : "In progress";

              return (
                <motion.div
                  ref={container}
                  key={item.id}
                  className={`md:flex shadow-xl group p-0.25 rounded-xl ${item.colorful ? "bg-linear-gradient" : ""}`}
                >
                  <div
                    className={`relative p-8 rounded-xl overflow-hidden xl:p-15 ${item.colorful ? "bg-n-8/95" : ""}`}
                  >
                    <div className="absolute top-0 left-0">
                      <div className="w-[40rem] mix-blend-hard-light filter saturate-70 opacity-20 bg-texture bg-cover bg-center h-[50rem]" />
                    </div>

                    <div className="relative z-1">
                      <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                        <Tagline>{item.date}</Tagline>

                        <div className="absolute flex flex-col justify-center items-center right-0 top-0 text-n-1 gap-2">
                          <img
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
