import { useLocation } from "react-router-dom";
import { favicon, github } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";

const Header = () => {
  const pathname = useLocation();

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-n-6 bg-n-8/50 backdrop-blur-md">
      <div className="flex flex-col md:flex-row items-center justify-between px-5 lg:px-7.5 xl:px-10 max-md:py-10 max-lg:py-4">
        <a href="#hero" className="w-[8rem] xl:mr-[10rem]">
          <div className="flex items-center gap-2">
            <img
              className="fill-white"
              src={favicon}
              alt="lua"
              width={40}
              height={40}
            />
            <p className="flex items-center gap-1 text-3xl font-lexend font-bold hover:text-color-4 transition-colors">
              BCW
              <span className="animate-pulse rounded-sm h-8 w-4 bg-color-4" />
            </p>
          </div>
        </a>

        <nav className="top-[5rem] left-0 right-0 botton-0 bg-n-8 lg:mx-auto bg-transparent">
          <div className="z-2 flex items-center justify-center m-auto">
            {navigation.map((item) => (
              <a
                href={item.url}
                key={item.id}
                className={`lg:text-lg text-n-1 font-lexend transition-colors hover:text-color-4 lg:px-6 lg:py-8 md:py-4 py-6 px-2 -mr-.25  ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-color-1"
                    : "lg:text-n-1/50"
                } leading-5 xl:px-10 `}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex font-lexend items-center gap-2 xl:gap-5">
          <a
            href="#github"
            className="text-n-1/50 rounded-md transition-colors py-0.5  hover:bg-color-5/50"
          >
            <div className="flex items-center gap-3">
              <img src={github} alt="github" width={30} height={30} />
              Me on GitHub
            </div>
          </a>
          <Button
            className="flex font-bold rounded-lg transition bg-linear-gradient hover:bg-linear-gradient-hover text-n-8"
            href="#linkedin"
          >
            Hire me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
