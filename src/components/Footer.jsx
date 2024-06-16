import { cookie, favicon, mail } from "../assets";
import Blurry from "./Blurry";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer
      data-scroll-section
      className="flex flex-col p-10 pt-36 z-3 overflow-hidden"
    >
      <div className="flex items-center h-[30rem] justify-between relative rounded-xl p-10">
        <div className="flex flex-col h-full justify-between">
          <Blurry className="absolute opacity-50 z-0 scale-50 md:scale-125 left-7" />
          <div className="absolute opacity-10 inset-0 bg-footer-gradient border border-n-6 rounded-xl z-0" />
          <div className="absolute opacity-90 inset-0 bg-noisy rounded-2xl mix-blend-overlay" />
          <div className="absolute opacity-30 h-[2px] w-[40rem] top-36 bg-gradient-to-r from-color-1 to-transparent" />

          <div className="absolute z-3 -top-10 left-10">
            <img
              className="sepia"
              src={favicon}
              alt="lua"
              width={70}
              height={70}
            />
            <img
              className="absolute inset-0 blur-lg sepia"
              src={favicon}
              alt="lua"
              width={70}
              height={70}
            />
          </div>

          <div className="flex relative z-50 h-full py-7">
            <h1 className="h1 font-lexend w-fit gradient-text text-transparent">
              Better Call Whill
            </h1>
          </div>

          <div className="relative flex flex-col text-color-7 z-3 pt-5">
            <p>&copy; 2024 WhillianSousa | Freelance Web Developer</p>
            <span className="justify-center font-code text-color-7/40 pt-2">
              God&apos;s in his heaven - All&apos;s right with the world!
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full mt-10 md:mr-0 xl:mr-10">
          <Socials />
          <div className="flex text-color-7 font-light font-lexend text-lg gap-6 z-50 mb-10 mx-auto">
            <a
              href="mailto:whillscf@gmail.com.br"
              className="flex items-center gap-2 opacity-50 transition-opacity hover:opacity-80"
            >
              <img src={mail} width={30} height={30} alt="mail" />
              <p className="opacity-50">whillscf@gmail.com</p>
            </a>
            <div className="flex items-center gap-2 saturate-150">
              <img src={cookie} width={25} height={25} alt="cookie" />
              <p className="opacity-30">cookie-free website</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
