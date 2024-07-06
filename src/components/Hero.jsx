import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import TechLogos from "./TechLogos";
import ImageNoise from "./ImageNoise";
import Inner from "./Inner";
import { Trans, useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const Hero = () => {
  const parallaxRef = useRef();

  const { t } = useTranslation();

  return (
    <Inner>
      <section
        className="pt-[5.25rem] lg:pt-[6.25rem] xl:pt-[7.25rem]"
        id="hero"
      >
        {/* <LanguageSelector /> */}
        <div className="container relative" ref={parallaxRef}>
          <div className="relative z-3 mx-auto text-center mb-16 md:mb-20 lg:mb-32">
            <p className="flex text-xs lg:text-base justify-center items-center gap-1 font-lexend font-light text-n-14">
              $ ssh el.psy.congro.sh
              <span className="hidden md:block animate-pulse rounded-sm h-5 w-2 bg-color-1/50" />
            </p>
            <div className="flex flex-col items-center whitespace-nowrap">
              <h1 className="h1 uppercase font-bold gradient-text text-transparent leading-none xl:leading-none gap-1 mb-3 font-lexend pt-15">
                Better Call Wh
                <span className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.3rem] lg:text-[2.55rem] xl:text-[3.5rem] lowercase font-extrabold">
                  l
                </span>
                ll
              </h1>
              <p className="max-w-2xl leading-none text-right text-xs md:text-sm lg:text-lg xl:text-xl align-left text-color-7">
                {t("subtitle")}
              </p>
            </div>
          </div>

          <div className="relative max-w-[25rem] max-xl:mx-auto px-5 md:px-0 xl:left-[14rem] md:max-w-md mb-10 md:mb-15 lg:mb-24 group">
            <div className="absolute -inset-1 md:-inset-4 bg-gradient-to-r from-color-8 via-color-1 to-color-2 rounded-full blur-2xl opacity-50 group-hover:opacity-70 group-hover:duration-200 transition duration-1000 animate-tilt" />
            <div className="relative z-3 p-1 rounded-full bg-conic-gradient">
              <div className="relative bg-n-8 rounded-full">
                <div className="overflow-hidden">
                  <ImageNoise />

                  <ScrollParallax isAbsolutelyPositioned>
                    <ul className="hidden absolute -left-[5rem] bottom-[4rem] px-0.5 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-xl md:flex">
                      {heroIcons.map((icon, index) => (
                        <li className="p-3" key={index}>
                          <img src={icon} width={18} height={18} alt={icon} />
                        </li>
                      ))}
                    </ul>
                  </ScrollParallax>

                  <ScrollParallax isAbsolutelyPositioned>
                    <div className="hidden text-center absolute -right-[2.5rem] bottom-[18rem] px-6 py-7 bg-color-2/20 backdrop-blur rounded-full md:flex md:flex-col">
                      <div className="uppercase text-2xl text-color-2 font-lexend font-bold">
                        Don&apos;t <br /> Panic!
                      </div>
                      <div className="body-2 text-xs text-n-1">1m ago</div>
                    </div>
                  </ScrollParallax>
                </div>
              </div>
            </div>
          </div>
          <div className="flex text-color-7 mx-auto font-thin font-lexend text-center sm:leading-[2.5rem] lg:leading-[3rem] xl:absolute text-2xl sm:text-3xl lg:text-4xl max-w-[40rem] xl:w-[25rem] xl:left-[50rem] gap-1 xl:top-[27rem] xl:text-left">
            <p className="sm:pb-15 md:pb-20">
              <Trans
                i18nKey={t("heroText")}
                components={{
                  1: (
                    <span className="font-light text-transparent gradient-text" />
                  ),
                }}
              />
            </p>
          </div>
        </div>
        <TechLogos />
      </section>
    </Inner>
  );
};

export default Hero;
