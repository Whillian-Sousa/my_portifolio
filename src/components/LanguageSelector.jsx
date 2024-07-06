import { useTranslation } from "react-i18next";

const languages = [
  { code: "pt_br", lang: "PT" },
  { code: "en", lang: "EN" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex flex-row text-color-1 text-xs xl:text-base absolute left-[11rem] md:left-[20.5vw] lg:left-[12rem] xl:left-[14rem] 2xl:left-[15rem] rounded-md hover:bg-n-11 fit-content">
      {languages.map((lng) => {
        return (
          <button
            className={`px-[5px] py-[3px] rounded-md ${lng.code === i18n.language ? "bg-color-1 text-n-8 font-bold" : ""}`}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
