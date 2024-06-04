import Inner from "./Inner";

const Preloader = () => {
  return (
    <Inner>
      <div className="h-screen max-w-screen overflow-hidden flex items-center flex-col justify-center bg-n-8">
        <h1 className="max-w-screen h-screen flex flex-col justify-center gap-[9rem] -skew-y-12 text-[15rem] leading-[3rem] uppercase font-lexend font-extrabold tracking-[-0.07em] text-transparent gradient-text animate-gradient">
          <span className="">Better</span>
          <span className="ml-[40rem]">Call</span>
          <span className="ml-[64rem]">
            Wh<span className="lowercase text-[14rem]">l</span>ll
          </span>
        </h1>
        <p className="absolute rounded-lg text-color-7 font-extrabold border-[1px] border-color-7 z-1 right-24 bottom-[15rem] mix-blend-difference text-3xl p-3 -skew-y-6">
          by Whillian Sousa
        </p>
      </div>
    </Inner>
  );
};

export default Preloader;
