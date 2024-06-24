import { useRef } from "react";

const TranslateButton = ({ border, src, title }) => {
  const btn = useRef(null);

  if (typeof window !== undefined) {
    btn.onmousemove = function (e) {
      const x = e.pageX - btn.offsetLeft;
      const y = e.pageY - btn.offsetTop;

      btn.style.setProperty("--x", x + "px");
      btn.style.setProperty("--y", y + "px");
    };
  }

  return (
    <div
      ref={btn}
      className={`relative group 
${
  border
    ? "text-color-7 max-w-xs font-bold rounded-full py-2 px-7 lg:py-3 lg:px-10 mx-auto border overflow-clip tracking-widest before:transition-all before:duration-500 before:absolute before:translate-x-[-50%] before:translate-y-[-50%] before:w-0 before:h-0 before:rounded-full before:bg-color-7 hover:before:w-[500px] hover:before:h-[450px]"
    : "overflow-hidden"
}`}
    >
      <div
        className={`relative flex justify-center font-lexend ${border ? "overflow-hidden" : "hidden sm:flex"}`}
      >
        <button className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-[500ms] flex items-center gap-1 lg:gap-2 mix-blend-difference">
          <img
            className="max-xl:scale-75"
            src={src}
            alt="github"
            width={30}
            height={30}
          />
          <span className="text-xs lg:text-base">{title}</span>
        </button>
        <button className="translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all absolute duration-[500ms] flex items-center lg:gap-2 mix-blend-difference">
          <img
            className="max-xl:scale-75"
            src={src}
            alt="github"
            width={30}
            height={30}
          />
          <span className="text-xs lg:text-base">{title}</span>
        </button>
      </div>
    </div>
  );
};

export default TranslateButton;
