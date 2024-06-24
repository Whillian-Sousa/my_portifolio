import brackets from "../assets/svg/Brackets";

const Tagline = ({ className, children }) => {
  return (
    <div
      className={`scale-90 lg:scale-100 tagline flex items-center ${className || ""}`}
    >
      {brackets("left")}
      <div className="mx-2 sm:mx-3 text text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default Tagline;
