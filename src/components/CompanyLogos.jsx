import { companyLogos } from "../constants";
import Heading from "./Heading";

const CompanyLogos = () => {
  return (
    <div>
      <h5 className="font-lexend mb-6 pt-8 text-center text-n-1/50">
        <Heading tag="Helping peaple create beaultifull worlds with" />
      </h5>
      <div className="flex overflow-hidden group">
        <ul className="flex justify-center h-[7.5rem] animate-loop-scroll group-hover:paused">
          {companyLogos.map((logo, index) => (
            <li className="flex justify-center h-[7.5rem]" key={index}>
              <img
                className="max-w-none mx-[80px]"
                src={logo}
                width={54}
                height={28}
                alt={logo}
              />
            </li>
          ))}
        </ul>
        <ul className="flex relative w-full animate-loop-scroll group-hover:paused">
          {companyLogos.map((logo, index) => (
            <li className="flex justify-center h-[7.5rem]" key={index}>
              <img
                className="max-w-none mx-[80px]"
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
  );
};

export default CompanyLogos;
