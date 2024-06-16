import { hero } from "../assets";

const ImageNoise = () => {
  return (
    <div className="bg-noisy bg-cover rounded-full">
      <img
        src={hero}
        className="aspect-auto graycale mix-blend-lighten rounded-full"
        alt="hero"
      />
    </div>
  );
};

export default ImageNoise;
