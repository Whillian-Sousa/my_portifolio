const Blurry = ({ className }) => {
  return (
    <div className={`${className || ""} relative w-full max-w-xl`}>
      <div className="absolute top-12 -left-4 w-[25rem] h-[25rem] bg-color-6 rounded-full mix-blend-exclusion filter blur-2xl opacity-50 animate-blob animation-delay-4000" />
      <div className="absolute top-12 -right-4 w-[25rem] h-[25rem] bg-color-2 rounded-full mix-blend-exclusion filter blur-2xl opacity-50 animate-blob animation-delay-2000" />
      <div className="absolute top-24 left-20 w-[25rem] h-[25rem] bg-color-3 rounded-full mix-blend-luminosity filter blur-2xl opacity-50 animate-blob -animation-delay-2000" />
    </div>
  );
};

export default Blurry;
