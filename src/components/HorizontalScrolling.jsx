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
    <section id="skills" ref={targetRef} className="relative h-[700vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{
            scaleX,
            background,
          }}
          className="absolute top-[6rem] left-0 w-[100%] h-[5px] origin-left"
        />
        <motion.div style={{ x }} className="flex gap-15">
          <div className="relative flex flex-col w-[70vw] gap-5">
            <div className="flex flex-col max-w-[70rem]">
              <p className="text-[4rem] font-lexend leading-[4.5rem] font-semibold text-color-7">
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
              className="pt-10 pl-10 justify-start"
              img={favicon}
              alt="Moon Icon"
              text="Say hello"
              subtext="Let's talk"
            />
          </div>
          <div className="relative text-color-7 flex items-center gap-4 text-7xl font-bold text-nowrap">
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
                  className="inline-block mr-5"
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
              className=" text-transparent gradient-text py-10"
            >
              Scroll to everywhere
            </motion.span>
            <span className="border bg-color-5/50 rounded-3xl px-8 mx-10 py-6">
              In any direction you desire
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
            className="relative w-[67vw] flex items-center flex-col justify-center gap-12"
          >
            <p className="absolute rounded-lg text-color-3 font-extrabold border-[1px] border-color-3 right-16 top-24 z-1 text-3xl p-3 -skew-y-6">
              and exciting
            </p>
            <p className="pt-10 w-full h-full flex flex-col gap-28 -skew-y-12 text-[10rem] leading-[2rem] capitalize font-lexend font-extrabold text-color-7 text-transparent gradient-text animate-gradient">
              <span className="">new</span>
              <span className="ml-[15rem]">beautiful</span>
              <span className="ml-[44rem]">worlds</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrolling;
