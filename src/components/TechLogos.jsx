import { logos } from "../constants";
import TechList from "./TechList";
import { Trans, useTranslation } from "react-i18next";

const TechLogos = () => {
  const { t } = useTranslation();

  return (
    <div className="relative pt-15 pb-15">
      <div className="xl:container">
        <h1 className="h4 font-lexend text-center text-color-7">
          <Trans
            i18nKey={t("tolls")}
            components={{
              1: <span className="text-transparent gradient-text" />,
            }}
          />
        </h1>
        <div
          className="py-3 md:py-8 lg:py-10 xl:py-15 relative before:z-2 before:bg-linear-slide-l before:h-[100%] before:w-[100px] md:before:w-[175px] xl:before:w-[250px] before:content-[''] before:absolute before:overflow-hidden before:top-0
        after:z-2 after:bg-linear-slide-r after:h-[100%] after:w-[100px] md:after:w-[175px] xl:after:w-[250px] after:content-[''] after:absolute after:overflow-hidden after:top-0 after:right-0
        flex overflow-hidden group"
        >
          <ul className="flex animate-loop-scroll group-hover:paused">
            {logos.map((logo, index) => (
              <li
                className="flex justify-center items-center h-full"
                key={index}
              >
                <img
                  className="max-w-none scale-50 sm:scale-[0.6] md:scale-75 lg:scale-90 xl:scale-100 mx-[20px] sm:mx-[40px] md:mx-[50px] lg:mx-[80px]"
                  src={logo}
                  width={54}
                  height={28}
                  alt={logo}
                />
              </li>
            ))}
          </ul>
          <ul className="flex animate-loop-scroll group-hover:paused">
            {logos.map((logo, index) => (
              <li
                className="flex justify-center items-center h-full"
                key={index}
              >
                <img
                  className="max-w-none scale-50 sm:scale-[0.6] md:scale-75 lg:scale-90 xl:scale-100 mx-[20px] sm:mx-[40px] md:mx-[50px] lg:mx-[80px]"
                  src={logo}
                  width={54}
                  height={28}
                  alt={logo}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <TechList />
    </div>
  );
};

export default TechLogos;
