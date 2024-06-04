import { socials } from "../constants";
import GsapMagnetic from "./GsapMagnetic";

const Socials = () => {
  return (
    <div className="flex">
      <ul className="h-full flex gap-6 z-50">
        {socials.map((item) => (
          <GsapMagnetic key={item.id}>
            <div className="relative">
              <a
                href={item.url}
                target="_blank"
                className="flex relative items-center justify-center size-[5rem] rounded-full transition-colors hover:animate-spin-slow group"
              >
                <div className="absolute z-0 rounded-full opacity-20 transition-all size-[8rem] group-hover:bg-color-7 group-hover:" />
                <img
                  className="absolute group-hover:scale-125 group-hovermix-blend-difference group-hover:animate-despin"
                  src={item.iconUrl}
                  width={30}
                  height={30}
                  alt={item.title}
                />
                <svg
                  className="absolute z-1 opacity-0 scale-[0.27] group-hover:opacity-50 group-hover: pointer-events-none"
                  width="640"
                  height="480"
                >
                  <path
                    id="curve"
                    fill="none"
                    stroke="none"
                    // stroke-width="1"
                    d="M112 239.5a207.5 207.5 0 1 0 415 0a207.5 207.5 0 1 0 -415 0"
                  />
                  <text
                    className="text-[48px] font-lexend font-bold uppercase"
                    style={{ fill: "beige" }}
                  >
                    {[...Array(4)].map((_, i) => {
                      return (
                        <textPath
                          key={i}
                          href="#curve"
                          startOffset={i * 25 + "%"}
                        >
                          {item.title}
                        </textPath>
                      );
                    })}
                  </text>
                </svg>
              </a>
            </div>
          </GsapMagnetic>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
