const Button = ({ className, img, text, subtext, alt, children, px }) => {
  const classes = `relative inline-flex items-center justify-center h-8 lg:h-11 transition-colors ${px || "px-5 lg:px-7"} ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderHeaderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <div className={`grid gap-8 items-start ${className || ""}`}>
      <div className="relative group font-lexend">
        <div className="absolute inset-0.5 bg-gradient-to-r from-color-1 to-color-5 rounded-sm blur opacity-75 group-hover:opacity-100 group-hover:duration-200 transition duration-1000 animate-tilt" />
        <button
          type="submit"
          className="relative whitespace-nowrap px-5 py-3 lg:px-7 lg:py-4 bg-n-8 rounded-lg leading-none flex divide-x divide-gray-600"
        >
          <span className="flex items-center space-x-3 lg:space-x-5">
            <img src={img} alt={alt} width={24} height={24} />
            <span className="text-xs lg:text-base pr-4 lg:pr-6 text-color-7">
              {text}
            </span>
          </span>
          <span className="pl-4 lg:pl-6 text-color-5 text-xs lg:text-base group-hover:text-color-7 transition duration-200 space-x-3">
            <span>{subtext}</span>
            <span className="text-xl leading-none">&rarr;</span>
          </span>
        </button>
      </div>
    </div>
  );

  return img ? renderLink() : renderHeaderButton();
};

export default Button;
