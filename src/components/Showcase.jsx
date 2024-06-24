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

const Showcase = () => {
  return (
    <section id="work" className="">
      <div className="xl:max-w-[87.5rem] mx-auto grid grid-cols-1 md:grid-cols-[50%] md:grid-flow-col px-5 md:px-5 lg:px-15">
        {/* Moon */}
        <div className="relative h-full mx-auto">
          <Moon3d />
        </div>

        {/* Boxes */}
        <div className="">
          <h1 className="relative h1 font-lexend font-bold text-center pt-10 md:pt-40 text-color-7 ">
            New universes, <br />
            <span className="text-transparent gradient-text">
              new technologies
            </span>
          </h1>
          <div className="flex flex-col gap-[5vh] md:gap-[20vh] xl:gap-[30vh] max-md:max-w-[25rem] max-xl:max-w-[35rem] xl:w-[35rem] mx-auto md:px-5 py-20 lg:py-[15vh]">
            {/* 3d Scene */}
            <ShowcaseComponents
              date="May 2024"
              status="Done"
              gradient="3d "
              title="Scenes"
              text="Your brand exposed from all angles. 3D scenes offer new possibilities to showcase every detail of your product."
            >
              <Shapes />
            </ShowcaseComponents>

            {/* Animations */}
            <TiltCard
              date="May 2024"
              status="In progress"
              gradient="Animations"
              text="Your brand exposed from all angles. 3D scenes offer new possibilities to showcase every detail of your product."
            >
              <Typewriter />
            </TiltCard>

            {/* Buttons | Hovers */}
            <ShowcaseComponents
              date="Feb 2024"
              status="Done"
              gradient="Buttons"
              title=" & Hovers"
              text="How about more clicks? Interactivity is essential to make buttons more attractive to visitors. No more boring buttons on your page."
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
              date="Jun 2024"
              status="In progress"
              gradient="Scroll"
              title=" everywhere"
              text="In any direction you wish. Because only developers like shortcuts. Horizontal scrolling is the new thing."
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
