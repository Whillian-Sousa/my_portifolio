import { hero } from "../assets";

const ImageNoise = () => {
  return (
    <div className="bg-noisy bg-cover opacity- rounded-full">
      <img
        src={hero}
        className="aspect-auto graycale opacity- mix-blend-lighten rounded-full transition hover:scale-[1.03]"
        alt="hero"
      />
    </div>
  );
};

export default ImageNoise;
