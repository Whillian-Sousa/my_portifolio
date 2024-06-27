import { useTyping } from "../hooks/useTyping";

const words = ["more fancy", "more modern", "more beautiful"];

const Typewriter = () => {
  const typing = useTyping(words);

  return (
    <div className="grid place-content-center h-[30vh] text-color-7 text-center">
      <h1 className="text-[1.5rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-4xl font-lexend leading-tight font-medium">
        Make your page <br /> look{" "}
        <span className="text-color-1 font-semibold">{typing}</span>
        <span className="animate-pulse trackingwidest h4 rounded-sm bg-color-5 text-color-5">
          |
        </span>
      </h1>
    </div>
  );
};

export default Typewriter;
