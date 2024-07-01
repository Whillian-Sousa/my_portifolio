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
    <div
      ref={container}
      className="relative h-full md:h-[435vh] lg:h-[484vh] xl:h-[510vh] 2xl:h-[500vh]"
    >
      <div className="sticky top-0 h-[110vw] sm:h-[80vh] md:h-[100vh]">
        <div className="absolute inset-0 m-auto bg-color-2 blur-[4rem] sm:blur-[5rem] xl:blur-[6rem] opacity-70 rounded-full size-[55vw] md:size-[26vw] lg:size-[24vw] 2xl:size-[19vw]" />
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
          <ambientLight intensity={3} />
          <OrbitControls enableZoom={false} enablePan={false} />
          <Suspense fallback={null}>
            <Model progress={smoothProgress} />
          </Suspense>
          <Environment preset="night" />
        </Canvas>
        <div className="absolute left-5 sm:left-20 md:left-10 lg:left-20 xl:left-20 2xl:left-28 bottom-2 sm:bottom-10 md:bottom-48 lg:bottom-32 xl:bottom-32 text-[10px] lg:text-xs leading-tight text-n-13/50 font-light font-lexend sm:mr-10">
          This work is based on "Moon" <br />{" "}
          <a
            href="https://sketchfab.com/3d-models/moon-1425bed819624f0f92d1a05a4509289f"
            target="_blank"
          >
            (https://sketchfab.com/3d-models/moon-1425bed819624f0f92d1a05a4509289f){" "}
          </a>
          <br />
          by MaggaModels{" "}
          <a href="https://sketchfab.com/MaggaModels" target="_blank">
            (https://sketchfab.com/MaggaModels) <br /> licensed
          </a>
          under CC-BY-4.0{" "}
          <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank">
            (http://creativecommons.org/licenses/by/4.0/)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Moon3d;
