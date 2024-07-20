import React from "react";
import Moon from "./Moon";
import { Trans, useTranslation } from "react-i18next";
import ShowcaseComponents from "./ShowcaseComponents";
import Shapes from "./Shapes";
import { Animations, Buttons, Scenes3d, Scroll } from "./Card";

const features = [
  {
    title: "Use your calendar as a todo list",
    id: "todo-list",
    date: `vitrine_card_data.0.1`,
    status: `vitrine_card_status.0.1`,
    i18nKey: "vitrine_card_title.0.1",
    components: "text-transparent gradient-text",
    text: `vitrine_card_text.0`,
    children: <Shapes />,
    card: Scenes3d,
    // visual: OtherVisual,
  },
  {
    title: "Color your calendar to organize",
    id: "colors",
    card: Animations,
    // visual: OtherVisual,
  },
  {
    title: "Instantly know if someone is available",
    id: "availability",
    card: Buttons,
    // visual: OtherVisual,
  },
  {
    title: "Track what you listened to when",
    id: "music",
    card: Scroll,
    // visual: MusicVisual,
  },
];

const Work = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto container px-4">
      <div className="flex w-full items-start gap-20">
        <div className="sticky top-0 flex h-screen items-center w-full">
          <div className="relative w-full aspect-square">
            <Moon />
            {features.map((feature) => (
              <feature.card id={feature.id} key={feature.id} />
            ))}
          </div>
        </div>
        <div className="w-full py-[50vh]">
          <ul className="flex flex-col gap-[5vh] md:gap-[20vh] xl:gap-[30vh] max-md:max-w-[25rem] max-xl:max-w-[35rem] xl:w-[35rem] mx-auto md:px-5 py20 lg:py[15vh]">
            {features.map((feature) => (
              <li key={feature.id}>
                <ShowcaseComponents
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
                </ShowcaseComponents>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
