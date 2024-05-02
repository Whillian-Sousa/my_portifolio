import {
  reactColor,
  tailwindColor,
  typescriptColor,
  nodeGem,
  jsColor,
  gitColor,
} from "../assets";
import Heading from "./Heading";

const LogosSlide = () => {
  return (
    <div>
      <h5 className="font-lexend mb-6 pt-8 text-center text-n-1/50">
        <Heading tag="Helping peaple create beaultifull worlds with" />
      </h5>
      <div className="flex overflow-hidden group">
        <div className="flex justify-center h-[7.5rem] animate-loop-scroll group-hover:paused">
          <img
            loading="lazy"
            className="max-w-none mx-[80px]"
            width={54}
            height={28}
            src={reactColor}
          />
          <img
            loading="lazy"
            className="max-w-none mx-[80px]"
            width={54}
            height={28}
            src={tailwindColor}
          />
          <img
            loading="lazy"
            className="max-w-none mx-[80px]"
            width={54}
            height={28}
            src={typescriptColor}
          />
          <img
            loading="lazy"
            className="max-w-none mx-[80px]"
            width={54}
            height={28}
            src={nodeGem}
          />
          <img
            loading="lazy"
            className="max-w-none mx-[80px]"
            width={54}
            height={28}
            src={jsColor}
          />
          <img
            loading="lazy"
            className="max-w-none mx-[80px]"
            width={54}
            height={28}
            src={gitColor}
          />
        </div>
        <div className="flex justify-center animate-loop-scroll group-hover:paused">
          <img
            loading="lazy"
            className="max-w-none mx-[80px]"
            width={54}
            height={28}
            src={reactColor}
          />
          <img
            loading="lazy"
            className="max-w-none mx-[80px]"
            width={54}
            height={28}
            src={tailwindColor}
          />
          <img
            loading="lazy"
            className="max-w-none mx-[80px]"
            width={54}
            height={28}
            src={typescriptColor}
          />
          <img
            loading="lazy"
            className="max-w-none mx-[80px]"
            width={54}
            height={28}
            src={nodeGem}
          />
          <img
            loading="lazy"
            className="max-w-none mx-[80px]"
            width={54}
            height={28}
            src={jsColor}
          />
          <img
            loading="lazy"
            className="max-w-none mx-[80px]"
            width={54}
            height={28}
            src={gitColor}
          />
        </div>
      </div>
    </div>
  );
};

export default LogosSlide;
