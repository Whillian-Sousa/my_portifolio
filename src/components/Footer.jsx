import { cookie, favicon, mail } from "../assets";
import Blurry from "./Blurry";
import Socials from "./Socials";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer
      data-scroll-section
      className="p-5 lg:px-10 pt-40 pb-20 md:pb-5 lg:pb-10 overflow-hidden"
    >
      <div className="flex items-center h-[30rem] relative rounded-xl p-7 sm:p-10">
        <div className="flex flex-col h-full w-full justify-between md:mx-3 xl:mx-5">
          {/* Absolute */}
          <Blurry className="absolute opacity-50 scale-90 sm:scale-100 md:scale-125 -right-32 -bottom-20 sm:-bottom-32 sm:-left-7" />
          <div className="absolute opacity-10 inset-0 bg-footer-gradient border border-n-6 rounded-xl" />
          <div className="absolute opacity-90 inset-0 bg-noisy-texture rounded-2xl mix-blend-overlay" />
          <div className="absolute -top-10 left-10">
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

          <div className="flex flex-col lg:flex-row lg:justify-between max-lg:gap-10 relative w-full h-full py-7">
            <div className="relative">
              <h1 className="h1 font-lexend gradient-text text-transparent whitespace-nowrap">
                Better Call Whill
              </h1>
              <div className="absolute opacity-30 h-[2px] w-[20rem] sm:w-[30rem] md:w-[40rem] top-10 sm:top-15 xl:top-20 bg-gradient-to-r from-color-1 to-transparent" />
            </div>
            <Socials />
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-between w-full sm:gap8 max-sm:p-2">
            <div className="relative flex flex-col text-color-7 pt-5 max-sm:text-sm">
              <p className="whitespace-nowrap">
                &copy; 2024 Whillian Sousa <br className="lg:hidden" />
                <span className="hidden lg:inline-flex"> |</span>{" "}
                {t("footer_copy")}
              </p>
              <span className="font-code text-color-7/40 pt-2 whitespace-nowrap">
                God&apos;s in his heaven <br className="xl:hidden" />
                <span className="hidden xl:inline-flex"> -</span> All&apos;s
                right with the world!
              </span>
            </div>
            <div className="flex h-full mt-5">
              <div className="flex flex-col-reverse lg:flex-row text-color-7 font-light font-lexend md:text-lg gap-2 md:gap-4 sm:mb-5">
                <a
                  href="mailto:whillscf@gmail.com.br"
                  className="flex items-center gap-2 opacity-50 transition-opacity hover:opacity-80"
                >
                  <img src={mail} width={30} height={30} alt="mail" />
                  <p className="opacity-50 max-sm:text-sm">
                    whillscf@gmail.com
                  </p>
                </a>
                <div className="flex items-center gap-2 saturate-150 max-sm:text-sm">
                  <img src={cookie} width={25} height={25} alt="cookie" />
                  <p className="opacity-30 whitespace-nowrap">
                    cookie-free website
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
