import { logos } from "../constants";
import TechList from "./TechList";

const TechLogos = () => {
  return (
    <div className="relative py-8">
      <div className="container">
        <h1 className="text-4xl font-semibold p-5 font-lexend text-center text-color-7">
          Whillian's{" "}
          <span className="text-transparent gradient-text">tolls</span>
        </h1>
        <div
          className="relative before:z-2 before:bg-linear-slide-l before:h-[100%] before:w-[250px] before:content-[''] before:absolute before:overflow-hidden before:top-0
        after:z-2 after:bg-linear-slide-r after:h-[100%] after:w-[250px] after:content-[''] after:absolute after:overflow-hidden after:top-0 after:right-0
        flex overflow-hidden group"
        >
          <ul className="flex animate-loop-scroll group-hover:paused">
            {logos.map((logo, index) => (
              <li
                className="flex justify-center items-center h-[7.5rem]"
                key={index}
              >
                <img
                  className="max-w-none mx-[50px] lg:mx-[80px]"
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
                className="flex justify-center items-center h-[7.5rem]"
                key={index}
              >
                <img
                  className="max-w-none mx-[50px] lg:mx-[80px]"
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
