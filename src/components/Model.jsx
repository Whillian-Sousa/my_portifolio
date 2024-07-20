import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "framer-motion-3d";
import { useFrame, useThree } from "@react-three/fiber";

useGLTF.preload("../../moon.glb");

const Model = ({ progress }) => {
  const group = useRef(null);
  const { nodes, materials, animations, scene } = new useGLTF("../../moon.glb");
  const { viewport } = useThree();

  useFrame(() => {
    group.current.rotation.y += 0.003;
  });

  return (
    <motion.group
      ref={group}
      scale={viewport.width / 3.4}
      // scale={0.15}
      // scale={2.3}
      rotation-y={progress}
      rotation-x={progress}
    >
      <primitive object={scene} />
    </motion.group>
  );
};

export default Model;
