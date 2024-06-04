import gsap from "gsap/gsap-core";
import { useEffect, useRef } from "react";

const colors = ["#c32d27", "#f5c63f", "#457ec4", "#356fdb"];

const Cursor = ({ isHovered }) => {
  const size = isHovered ? 200 : 50;
  const delay = isHovered ? 0.015 : 0.005;
  const circles = useRef([]);
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const delayMouse = useRef({
    x: 0,
    y: 0,
  });

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const moveCircle = (x, y) => {
    circles.current.forEach((circle) => {
      gsap.set(circle, { x, y, xPercent: -50, yPercent: -50 });
    });
  };

  const animate = () => {
    const { x, y } = delayMouse.current;

    delayMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };
    moveCircle(delayMouse.current.x, delayMouse.current.y);
    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);

    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, []);

  return (
    <>
      {colors.map((color, i, array) => {
        return (
          <div
            ref={(ref) => (circles.current[i] = ref)}
            key={color}
            className="fixed top-0 left-0 rounded-full mix-blend-hard-light opacity-80 pointer-events-none z-2"
            style={{
              backgroundColor: color,
              width: size,
              height: size,
              filter: `blur(${isHovered ? 10 : 3}px)`,
              transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out, transform ${(array.length - i) * delay}s linear`,
            }}
          />
        );
      })}
    </>
  );
};

export default Cursor;
