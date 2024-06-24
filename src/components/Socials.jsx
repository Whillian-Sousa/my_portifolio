import { socials } from "../constants";
import MagneticButton from "./MagneticButton";

const Socials = () => {
  return (
    <div className="flex -my-5">
      <ul className="h-full flex gap-6 z-1">
        {socials.map((item) => (
          <MagneticButton
            id={true}
            key={item.id}
            url={item.url}
            iconUrl={item.iconUrl}
            title={item.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default Socials;
