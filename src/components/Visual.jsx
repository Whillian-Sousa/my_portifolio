import classNames from "classnames";
import { child } from "../assets";
import { useTranslation } from "react-i18next";

const Visual = ({ children, open }) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(
        "bio container fixed inset-0 flex items-center justify-center",
        open
          ? "opacity-100 backdrop-blur bg-cover z-10"
          : "opacity-0 pointer-events-none",
      )}
    >
      <div className="w-full over">
        <h1 className="h1 p-10 font-lexend text-transparent gradient-text animate-gradient">
          Bio
        </h1>
        <p className="text-2xl text-justify font-lexend font-extralight">
          {t("bio")}
        </p>
      </div>
      <div className="grid place-content-center w-full">{children}</div>
    </div>
  );
};

export const Bio = ({ open }) => {
  return (
    <Visual open={open}>
      <div className="aspect-square size-[30rem]">
        <img
          className="h-full object-cover rounded-2xl"
          src={child}
          alt="Child"
        />
      </div>
    </Visual>
  );
};
