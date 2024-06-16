"use client";
import { useLocation } from "react-router-dom";
import { favicon, github } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import { useEffect, useState } from "react";
import TranslateButton from "./TranslateButton";

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
      data-scroll-section
      className={
        fixed
          ? "fixed top-0 left-0 w-full z-50 bg-n-8/30 backdrop-blur-xl transition-all"
          : "fixed top-0 left-0 w-full z-50 py-3 transition-all"
      }
    >
      <div className="flex flex-col md:flex-row items-center justify-between px-5 lg:px-7.5 xl:px-10 max-md:py-10 max-lg:py-4">
        <a href="#hero" className="absolute border-0 w-[4rem] lg:scale-125">
          <div className="flex items-center gap-2">
            <img
              className="fill-white"
              src={favicon}
              alt="lua"
              width={40}
              height={40}
            />
            <img
              className="absolute inset-0 sepia blur-md"
              src={favicon}
              alt="lua"
              width={40}
              height={40}
            />
            <p className="flex items-center gap-1 text-3xl font-lexend font-bold text-color-7 hover:text-color-1 transition-colors">
              BCW
              <span className="animate-pulse rounded-sm h-7 w-3 bg-color-1/70" />
            </p>
          </div>
        </a>

        <nav className="top-[5rem] left-0 right-0 botton-0 mx-auto bg-transparent">
          <div className="z-2 flex items-center justify-center m-auto">
            {navigation.map((item) => (
              <a
                href={item.url}
                key={item.id}
                className={`lg:text- leading-none font-lexend transition-colors hover:text-color-5 lg:px-6 lg:py-8 md:py-4 py-6 px-2 -mr-.25 translate-y-[8px] after:flex after:h-4  ${
                  item.url === pathname.hash
                    ? "text-color-1 after:-translate-y-5 after:scale-x-110 translate-y-[8px] after:leading-none after:flex after:blur-xl after:transition-colors after:hover:transition-colors after:hover:bg-color-5 after:h-4 after:bg-color-1"
                    : "lg:text-n-1/50"
                } leading-5 xl:px-10 `}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="absolute right-10 flex font-lexend items-center gap-2 xl:gap-6">
          <a target="_blank" href="https://github.com/Whillian-Sousa">
            <TranslateButton src={github} title="This Code" />
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
