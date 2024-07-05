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
    <div className="text-color-1 text-xs lg:text-base right-15 dividex divide-color6/30 top-[7rem] rounded-md hover:bg-n-11 fixed z-50">
      {languages.map((lng) => {
        return (
          <button
            className={`px-2 py-1 rounded-md ${lng.code === i18n.language ? "bg-color-1 text-n-8 font-bold" : ""}`}
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
