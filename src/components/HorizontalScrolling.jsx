import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { favicon } from "../assets";
import Button from "./Button";

const text = "Horizontal scrolling is the new thing";

const HorizontalScrolling = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-73%"]);

  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#ffc876", "#9f53ff", "#ff98e2"],
  );

  const defaultAnimations = {
    hidden: {
      opacity: 0.1,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <section id="skills" ref={targetRef} className="relative w-full h-[700vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{
            scaleX,
            background,
          }}
          className="absolute top-[4rem] md:top-[4.3rem] lg:top-[5.5rem] left-0 w-[100%] h-[3px] md:h-[5px] origin-left"
        />
        <motion.div
          style={{ x }}
          className="flex items-center gap-20 lg:gap-15 xl:gap-28"
        >
          <div className="relative flex flex-col h-full whitespace-nowrap -ml-15 md:-ml-0 gap-3 md:gap-5">
            <div className="flex flex-col w-[100vw] sm:w-[70vw]">
              <p className="text-[5.6vw] sm:text-[2rem] md:text-[2.2rem] lg:text-[3rem] xl:text-[3.7rem] 2xl:text-[4rem] font-lexend leading-[7vw] sm:leading-[2.3rem] md:leading-[2.8rem] lg:leading-[3.8rem] xl:leading-[4.5rem] font-semibold text-color-7">
                How about you give to <br />
                <span className="text-transparent gradient-text">
                  your product
                </span>{" "}
                the visibility the <br /> it needs to show up better to <br />
                <span className="text-transparent gradient-text">
                  your customers?
                </span>
              </p>
            </div>
            <Button
              className="origin-left scale-[0.75] sm:scale-90 md:scale-90 lg:scale-100 pt-1 md:pt-3 lg:pt-5 xl:pt-10 pl-2 md:pl-5 lg:pl-7 xl:pl-10 justify-start"
              img={favicon}
              alt="Moon Icon"
              text="C'mon"
              subtext="Let's scroll"
            />
          </div>
          <div className="relative text-color-7 flex items-center gap-4 text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold text-nowrap">
            <motion.p
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ staggerChildren: 0.3 }}
              className="flex h-full items-center"
            >
              {text.split(" ").map((word) => (
                <motion.span
                  key={word}
                  className="inline-block mr-2 md:mr-5"
                  variants={defaultAnimations}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
            <motion.span
              initial={{
                rotate: "7deg",
              }}
              whileInView={{
                rotate: "0deg",
                transition: {
                  duration: 1,
                  ease: "backInOut",
                },
              }}
              viewport={{ once: true }}
              className="text-transparent gradient-text py-10"
            >
              Scroll everywhere
            </motion.span>
            <span className="border bg-color-5/50 rounded-xl md:rounded-3xl px-4 md:px-8 mx-2 md:mx-10 py-2 md:py-6">
              In any direction you wish
            </span>
          </div>
          <motion.div
            initial={{
              opacity: 0.1,
              scale: 0.8,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                duration: 2,
                ease: "backInOut",
              },
            }}
            viewport={{ once: true }}
            className="relative flex flex-col mx-auto -mr-[34rem] sm:-mr-[35rem] md:-mr-[15rem] lg:-mr-40 xl:-mr-20 2xl:-mr-0"
          >
            <p className="relative 2xl:scale-95 xl:scale-[0.8] lg:scale-[0.65] md:scale-[0.56] sm:scale-[0.44] scale-[0.27] origin-left mt-16 sm:mt-24 md:mt-32 lg:mt-44 xl:mt-56 grid h-screen place-content-center gap-28 -skew-y-12 text-[10rem] capitalize font-lexend font-extrabold text-transparent gradient-text animate-gradient">
              <span className="absolute rounded-lg text-color-3 font-extrabold border-[1px] border-color-3 left-60 bottom-[28rem] z-1 text-3xl p-3 skew-y-6">
                and exciting
              </span>
              <span className="">beautiful</span>
              <span className="ml-[30rem]">new</span>
              <span className="ml-[44rem]">worlds</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrolling;
