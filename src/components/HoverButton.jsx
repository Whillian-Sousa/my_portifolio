import React, { useEffect, useRef } from "react";

const HoverButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;

      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = (e) => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" },
      );
    };

    btnRef.current.addEventListener("mousemove", handleMouseMove);
    btnRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef.current.removeEventListener("mousemove", handleMouseMove);
      btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        Hover me
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100"
      ></span>
    </button>
  );
};

export default HoverButton;
