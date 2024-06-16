import { Canvas } from "@react-three/fiber";
import React from "react";
import HeroImage from "./HeroImage";

const HeroScene = ({ activeLogo }) => {
  return (
    <div className="fixed top-0 h-screen w-full">
      <Canvas>
        <HeroImage activeLogo={activeLogo} />
      </Canvas>
    </div>
  );
};
export default HeroScene;
