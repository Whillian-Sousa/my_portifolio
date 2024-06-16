import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const ImageHover = () => {
  const imageContainer = useRef(null);
  // variables

  let easeFactor = 0.02;
  let scene, camera, renderer, planeMesh;
  let mousePosition = { x: 0.5, y: 0.5 };
  let targetMousePosition = { x: 0.5, y: 0.5 };
  let mouseStopTimeout;
  let aberrationIntensity = 0.0;
  let lastPosition = { x: 0.5, y: 0.5 };
  let prevPosition = { x: 0.5, y: 0.5 };

  function animateScene() {
    requestAnimationFrame(animateScene);

    mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor;
    mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor;

    planeMesh.material.uniforms.u_mouse.value.set(
      mousePosition.x,
      1.0 - mousePosition.y,
    );

    planeMesh.material.uniforms.u_prevMouse.value.set(
      prevPosition.x,
      1.0 - prevPosition.y,
    );

    aberrationIntensity = Math.max(0.0, aberrationIntensity - 0.05);

    planeMesh.material.uniforms.u_aberrationIntensity.value =
      aberrationIntensity;

    renderer.render(scene, camera);
  }

  // event listeners
  imageContainer.addEventListener("mousemove", handleMouseMove);
  imageContainer.addEventListener("mouseenter", handleMouseEnter);
  imageContainer.addEventListener("mouseleave", handleMouseLeave);

  function handleMouseMove(event) {
    easeFactor = 0.02;
    let rect = imageContainer.getBoundingClientRect();
    prevPosition = { ...targetMousePosition };

    targetMousePosition.x = (event.clientX - rect.left) / rect.width;
    targetMousePosition.y = (event.clientY - rect.top) / rect.height;

    aberrationIntensity = 1;
  }

  function handleMouseEnter(event) {
    easeFactor = 0.02;
    let rect = imageContainer.getBoundingClientRect();

    mousePosition.x = targetMousePosition.x =
      (event.clientX - rect.left) / rect.width;
    mousePosition.y = targetMousePosition.y =
      (event.clientY - rect.top) / rect.height;
  }

  function handleMouseLeave() {
    easeFactor = 0.05;
    targetMousePosition = { ...prevPosition };
  }

  //New Code

  const uniforms = useRef({
    uTexture: { value: texture[0] },
    uDelta: { value: { x: 0, y: 0 } },
    uOpacity: { value: 1 },

    u_mouse: { value: new THREE.Vector2() },
    u_prevMouse: { value: new THREE.Vector2() },
    u_aberrationIntensity: { value: 0.0 },
    u_texture: { value: texture },
  });

  return (
    <div className="h-full w-full">
      <Canvas>
        <mesh scale={scale} ref={imageContainer} position-x={x} position-y={y}>
          <planeGeometry args={[1, 1, 15, 15]} />
          <shaderMaterial
            fragmentShader={fragmentShader}
            vertexShader={vertexShader}
            uniforms={uniforms.current}
          />
        </mesh>
      </Canvas>
    </div>
  );
};

export default ImageHover;
