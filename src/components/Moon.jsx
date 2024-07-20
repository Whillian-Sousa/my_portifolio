import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useScroll, useTransform, useSpring } from "framer-motion";
import Model from "./Model";

const Moon = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const smoothProgress = useSpring(progress, { damping: 30 });

  return (
    <div className="w-full h-full">
      <div className="absolute inset-0 m-auto bg-color-2 blur-[4rem] sm:blur-[5rem] xl:blur-[6rem] opacity-70 rounded-full size-[55vw] md:size-[26vw] lg:size-[24vw] 2xl:size-[19vw]" />
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
        <ambientLight intensity={3} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <Suspense fallback={null}>
          <Model progress={smoothProgress} />
        </Suspense>
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};

export default Moon;
