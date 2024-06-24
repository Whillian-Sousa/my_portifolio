import { useLocation } from "react-router-dom";
import { favicon, github } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import { useEffect, useState } from "react";
import TranslateButton from "./TranslateButton";
import { motion } from "framer-motion";

const bcw = "BCW";

const Header = () => {
  const pathname = useLocation();

  const [fixed, setFixed] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <div
      className={
        fixed
          ? "fixed top-0 left-0 w-full z-50 bg-n-8/30 py-3 md:py-0 backdrop-blur-xl transition-all"
          : "fixed top-0 left-0 w-full z-50 py-3 md:py-1 xl:py-3 transition-all"
      }
    >
      <div className="flex flex-row items-center justify-between px-5 lg:px-7.5 xl:px-10">
        <motion.a
          initial="initial"
          whileHover="whileHover"
          href="#hero"
          className="relative block lg:absolute xl:left-10 border-0 w-[9rem] lg:scale-125"
        >
          <motion.div
            variants={{
              initial: {
                x: 0,
              },
              whileHover: {
                x: -16,
              },
            }}
            transition={{
              type: "spring",
              delayChildren: 0.25,
              staggerChildren: 0.075,
            }}
            className="flex items-center gap-1"
          >
            <motion.img
              variants={{
                initial: {
                  x: 0,
                },
                whileHover: {
                  x: 16,
                },
              }}
              transition={{
                type: "spring",
              }}
              className="fill-white"
              src={favicon}
              alt="lua"
              width={40}
              height={40}
            />
            <motion.img
              variants={{
                initial: {
                  x: 0,
                },
                whileHover: {
                  x: 16,
                },
              }}
              transition={{
                type: "spring",
              }}
              className="absolute inset-0 sepia blur-md"
              src={favicon}
              alt="lua"
              width={40}
              height={40}
            />
            <p className="flex items-center gap- text-2xl md:text-3xl font-lexend font-bold text-color-7 hover:text-color1 transition-colors">
              {bcw.split("").map((l, i) => {
                return (
                  <motion.span
                    variants={{
                      initial: {
                        x: 0,
                      },
                      whileHover: {
                        x: 16,
                      },
                    }}
                    transition={{
                      type: "spring",
                    }}
                    className="inline-block"
                    key={i}
                  >
                    {l}
                  </motion.span>
                );
              })}
              <motion.span
                variants={{
                  initial: {
                    x: 0,
                  },
                  whileHover: {
                    x: 16,
                  },
                }}
                transition={{
                  type: "spring",
                }}
                className="animate-pulse ml-1 rounded-sm h-6 md:h-7 w-[0.6rem] md:w-3 bg-color-1/70"
              />
            </p>
          </motion.div>
        </motion.a>

        <nav className="hidden md:block top-[5rem] left-0 right-0 mx-auto lg:pr-10 bg-transparent">
          <div className="z-2 flex items-center justify-center m-auto">
            {navigation.map((item) => (
              <a
                href={item.url}
                key={item.id}
                className={`max-lg:font-light md:text-sm lg:text-base font-lexend transition-colors hover:text-color-5 lg:py-6 md:py-4 py-6 md:px-2 lg:px-5 xl:px-10 translate-y-[8px] after:flex after:h-4  ${
                  item.url === pathname.hash
                    ? "text-color-1 after:-translate-y-5 after:scale-x-110 translate-y-[8px] after:leading-none after:flex after:blur-xl after:transition-colors after:hover:transition-colors after:hover:bg-color-5 after:h-4 after:bg-color-1"
                    : "lg:text-n-1/50"
                } `}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex items-center lg:absolute right-5 xl:right-10 font-lexend gap-4 lg:gap-6">
          <a target="_blank" href="https://github.com/Whillian-Sousa">
            <TranslateButton src={github} title="Github" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/whillian-sousa/">
            <Button className="flex group absolute font-bold max-lg:text-sm min-width:fitcontent rounded-full transition-transform hover:transition-all bg-linear-gradient hover:pr-9 hover:scale-105 hover:pl-5 text-n-8">
              Hire me
              <span className="text-transparent text-xl absolute -right-6 -top-1 group-hover:text-n-8 m-0">
                &rarr;
              </span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
