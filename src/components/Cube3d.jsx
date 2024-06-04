import {
  Environment,
  MeshTransmissionMaterial,
  OrbitControls,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useControls } from "leva";

const Cube3d = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const smoothProgress = useSpring(progress, { damping: 20 });

  return (
    <div ref={container} className="h-[500vh]">
      <div className="sticky top-0 h-[100vh]">
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} />
          {/* <ambientLight intensity={2} /> */}
          <Environment preset="studio" />
          <directionalLight intensity={1} position={[0, 3, 2]} />
          <Cube progress={smoothProgress} />
        </Canvas>
      </div>
    </div>
  );
};

export default Cube3d;

function Cube({ progress }) {
  const mesh = useRef(null);

  const materialProps = useControls({
    thickness: { value: 1.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0.4, min: 0, max: 1, step: 0.1 },
    transmission: { value: 0.9, min: 0, max: 1, step: 0.1 },
    ior: { value: 0.8, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.62, min: 0, max: 1 },
    backside: { value: true },
  });

  return (
    <motion.mesh ref={mesh} rotation-y={progress} rotation-x={progress}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      {/* <meshStandardMaterial color={"orange"} /> */}
      <MeshTransmissionMaterial {...materialProps} />
    </motion.mesh>
  );
}
