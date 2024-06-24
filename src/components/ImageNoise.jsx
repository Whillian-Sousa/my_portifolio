import { hero } from "../assets";

const ImageNoise = () => {
  return (
    <div className="bg-noisy bg-cover rounded-full">
      <img
        src={hero}
        className="aspect-auto mix-blend-lighten rounded-full"
        alt="hero"
      />
      <div className="absolute inset-0 bg-n-8 rounded-full opacity-30" />
    </div>
  );
};

export default ImageNoise;
