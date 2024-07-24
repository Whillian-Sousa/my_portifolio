import React from "react";
import Moon from "./Moon";
import { Trans, useTranslation } from "react-i18next";
import ShowcaseComponents from "./ShowcaseComponents";
import Shapes from "./Shapes";
import { Animations, Buttons, Scenes3d, Scroll } from "./Card";
import Typewriter from "./Typewriter";
import ParallaxGalery from "./ParallaxGalery";
import Button from "./Button";
import MagneticButton from "./MagneticButton";
import { favicon, moon, star } from "../assets";
import TranslateButton from "./TranslateButton";
import TiltCard from "./TiltCard";

const Btn = () => {
  return (
    <>
      <MagneticButton
        className="border"
        url="#"
        iconUrl={favicon}
        title="Hover me -"
      />
      <TranslateButton className="" border={true} src={moon} title="Click me" />
      <Button
        className="-mt-6 md:-mt-8"
        img={star}
        alt="Moon Icon"
        text="Hover me"
        subtext="Click me"
      />
    </>
  );
};

const features = [
  {
    right_card: ShowcaseComponents,
    id: "todo-list",
    date: `vitrine_card_data.0.1`,
    status: `vitrine_card_status.0.1`,
    i18nKey: `vitrine_card_title.0.1`,
    text: `vitrine_card_text.0`,
    children: <Shapes />,
    card: Scenes3d,
  },
  {
    right_card: TiltCard,
    id: "colors",
    date: `vitrine_card_data.0.1`,
    status: `vitrine_card_status.1.1`,
    i18nKey: `vitrine_card_title.1.1`,
    text: `vitrine_card_text.1`,
    children: <Typewriter />,
    card: Animations,
  },
  {
    right_card: ShowcaseComponents,
    id: "availability",
    date: `vitrine_card_data.1.1`,
    status: `vitrine_card_status.0.1`,
    i18nKey: `vitrine_card_title.2.1`,
    text: `vitrine_card_text.2`,
    children: <Btn />,
    card: Buttons,
  },
  {
    right_card: ShowcaseComponents,
    id: "music",
    date: `vitrine_card_data.2.1`,
    status: `vitrine_card_status.1.1`,
    i18nKey: `vitrine_card_title.3.1`,
    text: `vitrine_card_text.3`,
    children: <ParallaxGalery />,
    card: Scroll,
  },
];

const Work = () => {
  const { t } = useTranslation();

  return (
    <section id="work" className="mx-auto xl:container xl:px-4 max-sm:p-5">
      <div className="max-md:flex-col flex w-full items-start xl:gap-20">
        <div className="md:sticky top-0 flex md:h-screen items-center w-full md:w-1/2">
          <div className="relative w-full aspect-square max-sm:p-0 max-md:p-10">
            <Moon />
            {features.map((feature) => (
              <feature.card id={feature.id} key={feature.id} />
            ))}
          </div>
        </div>
        <div className="relative w-full md:w-1/2 py-[15vh] md:py-[50vh]">
          <h1 className="absolute w-full top-0 sm:-top-5 md:top-56 h1 font-lexend font-bold text-center text-color-7 ">
            <Trans
              i18nKey={t("vitrine_h1")}
              components={{
                1: <span className="text-transparent gradient-text" />,
              }}
            />
          </h1>
          <ul className="flex flex-col gap-[5vh] md:gap-[20vh] xl:gap-[30vh] max-md:max-w-[25rem] max-xl:max-w-[35rem] xl:w-[35rem] mx-auto md:px-5 lg:py[15vh]">
            {features.map((feature) => (
              <li key={feature.id}>
                <feature.right_card
                  id={feature.id}
                  date={t(`${feature.date}`)}
                  status={t(`${feature.status}`)}
                  title={
                    <Trans
                      i18nKey={t(`${feature.i18nKey}`)}
                      components={{
                        1: <span className="text-transparent gradient-text" />,
                      }}
                    />
                  }
                  text={t(`${feature.text}`)}
                >
                  {feature.children}
                </feature.right_card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
