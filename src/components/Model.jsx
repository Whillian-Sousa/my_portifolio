import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "framer-motion-3d";
import { useFrame } from "@react-three/fiber";

useGLTF.preload("../../public/moon.glb");

const Model = ({ progress }) => {
  const group = useRef(null);
  const { nodes, materials, animations, scene } = new useGLTF(
    "../../public/moon.glb",
  );

  useFrame(() => {
    group.current.rotation.y += 0.003;
  });

  return (
    <motion.group
      ref={group}
      scale={0.15}
      rotation-y={progress}
      rotation-x={progress}
    >
      <primitive object={scene} />
    </motion.group>
  );
};

export default Model;
