import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useScroll, useTransform, useSpring } from "framer-motion";
import Model from "./Model";
import { useProgress, Html } from "@react-three/drei";
import CircleLetters from "./CicleLetters";

function Loader() {
  const { loading, active } = useProgress();

  return <Html center>{loading.toFixed(1)} % loaded</Html>;
}

const Moon3d = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const smoothProgress = useSpring(progress, { damping: 30 });

  return (
    <div ref={container} className="h-[490vh]">
      <div className="sticky top-0 h-[100vh]">
        <div className="absolute inset-0 bg-color-2 top-[19rem] left-[8rem] content-center blur-[6rem] opacity-70 rounded-full size-[22rem]" />
        <CircleLetters progress={smoothProgress} />
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
          <ambientLight intensity={3} />
          <OrbitControls enableZoom={false} enablePan={false} />
          <Suspense fallback={<Loader />}>
            <Model progress={smoothProgress} />
          </Suspense>
          <Environment preset="night" />
        </Canvas>
      </div>
    </div>
  );
};

export default Moon3d;
