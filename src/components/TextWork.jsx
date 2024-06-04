const TextWork = () => {
  return (
    <div className="content-center">
      <div className="h-screen absolute inset-0 flex flex-col justify-center">
        <h1 className="text-center w-fit mx-auto font-semibold text-5xl font-lexend">
          The best for your site
        </h1>
        <div className="flex flex-col text-color-7 font-thin blur-[0.8px] font-lexend text-left md:leading-[3rem] md:text-4xl pt-15 pl-15">
          <p className="px-5 w-[23rem]">
            Build your <span className="text-color-1 font-light"> world</span>,
            rise your
            <span className="text-color-1 font-light"> brand</span>. Give to
            your customers an{" "}
            <span className="text-color-1 font-light">experience</span> that
            social media won&apos;t offers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextWork;
