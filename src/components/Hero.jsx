import { gradient, hero } from "../assets";
import Section from "./Section";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
// import CompanyLogos from "./CompanyLogos";
import LogosSlide from "./LogosSlide";

const Hero = () => {
  const parallaxRef = useRef();
  return (
    <Section
      className="pt-[16rem] md:pt-[7rem] -mt-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <p className="flex justify-center items-center gap-1 font-lexend text-n-5">
            $ ssh el.psy.congro.sh
            <span className="animate-pulse rounded-sm h-5 w-2 bg-color-1/50" />
          </p>
          <h1 className="h1 text-color-1 gap-1 mb-3 font-lexend pt-15">
            Whill.i.am
            <div className="mx-auto rounded-sm h-1 w-[15rem] lg:w-[20rem] xl:w-[25rem] bg-color-5" />
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            The Infinite Improbability Drive
          </p>
        </div>

        <div className="relative max-w-[15rem] max-xl:mx-auto xl:left-[14rem] md:max-w-md mb-24">
          <div className="relative z-1 p-1 rounded-full bg-conic-gradient">
            <div className="relative bg-n-8 rounded-full">
              <div className="overflow-hidden">
                <img
                  src={hero}
                  className="w-full grayscale rounded-full"
                  width={1024}
                  height={490}
                  alt="hero"
                />

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

          <div className="absolute opacity-50 -top-[30%] left-1/2 w-[164%] -translate-x-1/2 md:-top[46%]">
            <img src={gradient} width={1440} height={1800} alt="gradient" />
          </div>
        </div>
        <div className="flex text-n-10 mx-auto text-center md:leading-[2.5rem] xl:absolute font-lexend md:text-xl p-5 md:w-[30rem] xl:left-[49rem] gap-1 xl:top-[35rem] xl:text-justify">
          <p>
            <span className="text-2xl md:text-4xl text-color-4">&quot;</span>{" "}
            Build your world, rise your brand. Give to your customers an
            experience that social media won&apos;t offers{" "}
            <span className="text-2xl md:text-4xl leading-[1rem] text-color-4">
              &quot;
            </span>
          </p>
        </div>

        {/* <CompanyLogos className="" /> */}

        <LogosSlide />
      </div>
    </Section>
  );
};

export default Hero;
