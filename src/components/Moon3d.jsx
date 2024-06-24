import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useScroll, useTransform, useSpring } from "framer-motion";
import Model from "./Model";
import { useProgress, Html } from "@react-three/drei";

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
    <div ref={container} className="relative h-full md:h-[490vh]">
      <div className="md:sticky top-0 h-[60vh] md:h-[100vh]">
        <div className="absolute inset-0 m-auto bg-color-2 blur-[6rem] opacity-70 rounded-full size-[19vw]" />
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
          <ambientLight intensity={3} />
          <OrbitControls enableZoom={false} enablePan={false} />
          <Suspense fallback={<Loader />}>
            {/* <Model progress={smoothProgress} /> */}
          </Suspense>
          <Environment preset="night" />
        </Canvas>
      </div>
    </div>
  );
};

export default Moon3d;
