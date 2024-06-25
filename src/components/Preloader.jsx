import Inner from "./Inner";

const Preloader = () => {
  return (
    <Inner>
      <div className="grid auto-cols-1 place-content-center overflow-hidden bg-n-8">
        <p className="3xl:scale-100 2xl:scale-95 xl:scale-[0.8] lg:scale-[0.6] md:scale-[0.45] sm:scale-[0.4] scale-[0.22] relative h-[100vh] pl-24 flex flex-col items-center justify-center gap-[9rem] -skew-y-12 text-[13.5rem] uppercase font-lexend font-extrabold tracking-[-0.07em] text-transparent gradient-text animate-gradient">
          <span className="-ml-[54rem]">Better</span>
          <span className="">Call</span>
          <span className="ml-[51rem]">
            Wh<span className="lowercase text-[12.6rem]">l</span>ll
          </span>
          <span className="absolute rounded-lg text-color-7 font-semibold border-[1px] border-color-7 right-[2vw] top-[80%] mix-blend-difference capitalize tracking-normal text-3xl p-3 skew-y-6">
            by Whillian Sousa
          </span>
        </p>
      </div>
    </Inner>
  );
};

export default Preloader;
