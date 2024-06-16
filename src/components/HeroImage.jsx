import React, { useEffect, useRef } from "react";
import useMouse from "../hooks/useMouse";
import { motion } from "framer-motion-3d";
import useDimension from "../hooks/useDimension";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue, useTransform } from "framer-motion";
import { fragment, vertex } from "../hooks/shader";
import { useAspect, useTexture } from "@react-three/drei";
import { companyLogos } from "../constants";

const HeroImage = ({ activeLogo }) => {
  const mesh = useRef();

  const dimension = useDimension();
  const { viewport } = useThree();
  const texture = companyLogos.map((logo) => useTexture(logo));
  const opacity = useMotionValue(0);
  const mouse = useMouse();

  const scale = useAspect(
    texture[0].image.width,
    texture[0].image.height,
    0.155,
  );

  const smoothMouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const uniforms = useRef({
    uTexture: { value: texture[0] },
    uDelta: { value: { x: 0, y: 0 } },
    uOpacity: { value: 1 },
  });

  useEffect(() => {
    if (activeLogo != null) {
      animate(opacity, 1, {
        duration: 0.2,
        onUpdate: (progress) =>
          (mesh.current.material.uniforms.uOpacity.value = progress),
      });
      mesh.current.material.uniforms.uTexture.value = texture[activeLogo];
    } else {
      animate(opacity, 0, {
        duration: 0.2,
        onUpdate: (progress) =>
          (mesh.current.material.uniforms.uOpacity.value = progress),
      });
    }
  }, [activeLogo]);

  const lerp = (x, y, a) => x * (1 - a) + y * a;
  useFrame(() => {
    const { x, y } = mouse;
    const smoothX = smoothMouse.x.get();
    const smoothY = smoothMouse.y.get();
    smoothMouse.x.set(lerp(smoothX, x.get(), 0.1));
    smoothMouse.y.set(lerp(smoothY, y.get(), 0.1));
    mesh.current.material.uniforms.uDelta.value = {
      x: x.get() - smoothX,
      y: -1 * (y.get() - smoothY),
    };
  });

  const x = useTransform(
    smoothMouse.x,
    [0, dimension.width],
    [(-1 * viewport.width) / 2, viewport.width / 2],
  );
  const y = useTransform(
    smoothMouse.y,
    [0, dimension.height],
    [viewport.height / 2, (-1 * viewport.height) / 2],
  );

  return (
    <motion.mesh scale={scale} ref={mesh} position-x={x} position-y={y}>
      <planeGeometry args={[1, 1, 15, 15]} />
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms.current}
        transparent={true}
      />
    </motion.mesh>
  );
};

export default HeroImage;
