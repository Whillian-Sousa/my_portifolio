import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import TechLogos from "./TechLogos";
import Blurry from "./Blurry";
import ImageNoise from "./ImageNoise";
import Inner from "./Inner";

const Hero = () => {
  const parallaxRef = useRef();
  return (
    <Inner>
      <section className="pt-[16rem] md:pt-[7.25rem]" id="hero">
        <div className="container relative" ref={parallaxRef}>
          <div className="relative z-3 mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
            <p className="flex justify-center items-center gap-1 font-lexend text-n-14">
              $ ssh el.psy.congro.sh
              <span className="animate-pulse rounded-sm h-5 w-2 bg-color-1/50" />
            </p>
            <div className="flex flex-col items-center">
              <h1 className="h1 uppercase font-bold gradient-text text-transparent gap-1 mb-3 font-lexend pt-15">
                Better Call Wh
                <span className="text-[clamp(1.25rem,3.8vw,3.6rem)] lowercase font-extrabold">
                  l
                </span>
                ll
                {/* <div className="mx-auto rounded-sm h-1 w-[15rem] lg:w-[20rem] xl:w-[27rem] bg-color-5" /> */}
              </h1>
              <p className="max-w-2xl mb-6 text-right text-xl align-left text-color-7">
                The Infinite Improbability Drive
              </p>
            </div>
          </div>

          <div className="relative max-w-[15rem] max-xl:mx-auto xl:left-[14rem] md:max-w-md mb-24">
            <Blurry className="scale-50 md:scale-100 -left-5" />
            <div className="relative z-3 p-1 rounded-full bg-conic-gradient">
              <div className="relative bg-n-8 rounded-full">
                <div className="overflow-hidden">
                  <ImageNoise />

                  <ScrollParallax isAbsolutelyPositioned>
                    <ul className="hidden absolute -left-[6rem] bottom-[4rem] px-0.5 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-xl md:flex">
                      {heroIcons.map((icon, index) => (
                        <li className="p-3" key={index}>
                          <img src={icon} width={19} height={20} alt={icon} />
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
          <div className="flex text-color-7 mx-auto font-thin blur-[0.8px] font-lexend text-center md:leading-[3rem] xl:absolute md:text-4xl md:w-[23rem] xl:left-[50rem] gap-1 xl:top-[22rem] xl:text-left">
            <p className="p-5">
              Build your <span className="text-color-1 font-light"> world</span>
              , rise your
              <span className="text-color-1 font-light"> brand</span>. Give to
              your customers an{" "}
              <span className="text-color-1 font-light">experience</span> that
              social media won&apos;t offers.
            </p>
          </div>
        </div>
        <TechLogos />
      </section>
    </Inner>
  );
};

export default Hero;
