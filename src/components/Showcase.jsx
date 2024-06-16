import { favicon, moon, star } from "../assets";
import Button from "./Button";
import HoverButton from "./HoverButton";
import MagneticButton from "./MagneticButton";
import Moon3d from "./Moon3d";
import ParallaxGalery from "./ParallaxGalery";
import Shapes from "./Shapes";
import ShowcaseComponents from "./ShowcaseComponents";
import TranslateButton from "./TranslateButton";

const Showcase = () => {
  return (
    <section id="work" className="relative">
      <div className="container grid md:grid-cols-2 w-full items-start gap-20">
        {/* Moon */}
        <div className="relative w-full h-full">
          <Moon3d />
        </div>

        {/* Boxes */}
        <div className="w-full">
          <h1 className="relative h1 font-lexend font-bold text-center pt-40 text-color-7 ">
            New universes, <br />
            <span className="text-transparent gradient-text">
              new technologies
            </span>
          </h1>
          <div className="flex flex-col gap-[30vh] px-10 py-[15vh]">
            {/* 3d Scene */}
            <ShowcaseComponents
              date="May 2024"
              status="Done"
              gradient="3d "
              title="Scenes"
              text="Your brand exposed from all angles. 3D scenes offer new possibilities to show every detail of your product."
            >
              <Shapes />
            </ShowcaseComponents>

            {/* Animations */}
            <ShowcaseComponents
              date="May 2024"
              status="In progress"
              gradient="Animations"
              text="Your brand exposed from all angles. 3D scenes offer new possibilities to show every detail of your product."
            ></ShowcaseComponents>

            {/* Buttons | Hovers */}
            <ShowcaseComponents
              date="Feb 2024"
              status="Done"
              gradient="Buttons"
              title=" & Hovers"
              text="How about more clicks? Interactivines is key to make buttons feels more atractive to your visitors. No more boring buttons in your page."
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
                className="pt-10 p-5 justify-center"
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
              text="In any direction you desire. Because only developers likes Shortcuts. Horizontal scrolling is the new thing"
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
