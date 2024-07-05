import { favicon, moon, star } from "../assets";
import Button from "./Button";
import MagneticButton from "./MagneticButton";
import Moon3d from "./Moon3d";
import ParallaxGalery from "./ParallaxGalery";
import Shapes from "./Shapes";
import ShowcaseComponents from "./ShowcaseComponents";
import TiltCard from "./TiltCard";
import TranslateButton from "./TranslateButton";
import Typewriter from "./Typewriter";
import { Trans, useTranslation } from "react-i18next";

const Showcase = () => {
  const { t } = useTranslation();

  return (
    <section id="work" className="">
      <div className="xl:max-w-[90.5rem] mx-auto grid grid-cols-1 md:grid-cols-[50%] md:grid-flow-col px-5 md:px-5 lg:px-15 2xl:gap-20">
        {/* Moon */}
        <div className="relative w-full h-full mx-auto">
          <Moon3d />
        </div>

        {/* Boxes */}
        <div className="">
          <h1 className="relative h1 font-lexend font-bold text-center pt-10 md:pt-40 text-color-7 ">
            <Trans
              i18nKey={t("vitrine_h1")}
              components={{
                1: <span className="text-transparent gradient-text" />,
              }}
            />
          </h1>
          <div className="flex flex-col gap-[5vh] md:gap-[20vh] xl:gap-[30vh] max-md:max-w-[25rem] max-xl:max-w-[35rem] xl:w-[35rem] mx-auto md:px-5 py-20 lg:py-[15vh]">
            {/* 3d Scene */}
            <ShowcaseComponents
              date={t(`vitrine_card_data.0.1`)}
              status={t(`vitrine_card_status.0.1`)}
              title={
                <Trans
                  i18nKey={t("vitrine_card_title.0.1")}
                  components={{
                    1: <span className="text-transparent gradient-text" />,
                  }}
                />
              }
              text={t(`vitrine_card_text.0`)}
            >
              <Shapes />
            </ShowcaseComponents>

            {/* Animations */}
            <TiltCard
              date={t(`vitrine_card_data.0.1`)}
              status={t(`vitrine_card_status.1.1`)}
              title={t(`vitrine_card_title.1.1`)}
              text={t(`vitrine_card_text.1`)}
            >
              <Typewriter />
            </TiltCard>

            {/* Buttons | Hovers */}
            <ShowcaseComponents
              date={t(`vitrine_card_data.1.1`)}
              status={t(`vitrine_card_status.0.1`)}
              title={
                <Trans
                  i18nKey={t("vitrine_card_title.2.1")}
                  components={{
                    1: <span className="text-transparent gradient-text" />,
                  }}
                />
              }
              text={t(`vitrine_card_text.2`)}
            >
              <MagneticButton url="#" iconUrl={favicon} title="Hover me -">
                Hover Me!
              </MagneticButton>
              <TranslateButton
                className=""
                border={true}
                src={moon}
                title="Click me"
              />
              <Button
                className="-mt-6 md:-mt-8"
                img={star}
                alt="Moon Icon"
                text="Hover me"
                subtext="Click me"
              />
            </ShowcaseComponents>

            {/* Scroll to everywhere */}
            <ShowcaseComponents
              date={t(`vitrine_card_data.2.1`)}
              status={t(`vitrine_card_status.1.1`)}
              title={
                <Trans
                  i18nKey={t("vitrine_card_title.3.1")}
                  components={{
                    1: <span className="text-transparent gradient-text" />,
                  }}
                />
              }
              text={t(`vitrine_card_text.3`)}
            >
              <ParallaxGalery />
            </ShowcaseComponents>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Showcase;
