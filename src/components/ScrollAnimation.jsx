import { roadmap } from "../constants";
import { moon, star } from "../assets";
import Tagline from "./Tagline";
import Moon3d from "./Moon3d";

const ScrollAnimation = () => {
  return (
    <div id="work" className="relative">
      <div className="container flex w-full items-start gap-20">
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
          <div className=" flex flex-col gap-[30vh] px-10 py-[15vh]">
            {roadmap.map((item) => {
              const status = item.status === "done" ? "Done" : "In progress";

              return (
                <div
                  key={item.id}
                  className={`relative md:flex shadow-xl group p-0.25 rounded-xl ${item.colorful ? "" : ""}`}
                >
                  <div
                    className={`relative p-8 rounded-xl overflow-hidden xl:p-15 ${item.colorful ? "" : ""}`}
                  >
                    <div className="absolute inset-0 mix-blend-lighten opacity-20 bg-texture bg-cover bg-center" />

                    <div className="relative z-1">
                      <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                        <Tagline>{item.date}</Tagline>

                        <div className="absolute flex flex-col justify-center items-center right-0 top-0 text-n-1 gap-2">
                          <img
                            src={item.status === "done" ? star : moon}
                            alt={status}
                            width={40}
                            height={40}
                          />
                          <div className="tagline">{status}</div>
                        </div>
                      </div>

                      <div className="mb-10 -my-10 -mx-15">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          width={630}
                          height={420}
                        />
                      </div>

                      <h4 className="h4 mb-4">{item.title}</h4>
                      <p className="body-2 text-n-4">{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScrollAnimation;
