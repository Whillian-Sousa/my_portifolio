import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `relative inline-flex items-center justify-center h-8 lg:h-11 transition-colors ${px || "px-5 lg:px-7"} ${
    white ? "text-n-8" : "text-n-1"
  } ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export const ButtonAnimate = () => {
  return (
    <button className="rounded-full border border-white/50 max-w-[170px] p-3 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
      <div className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-200 flex gap-4">
        <span>Let&apos;s talk</span>
        <span> &rarr;</span>
      </div>
      <div className="translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all absolute duration-200 flex gap-4">
        <span>Let&apos;s talk</span>
        <span> &rarr;</span>
      </div>
    </button>
  );
};

export default Button;
