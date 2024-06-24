import { Canvas } from "@react-three/fiber";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HorizontalScrolling from "./components/HorizontalScrolling";
import LetsTalk from "./components/LetsTalk";
import { Stars } from "@react-three/drei";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Showcase from "./components/Showcase";
import NavBottom from "./components/NavBottom";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 3000);
  }, []);

  return (
    <>
      {preloader ? (
        <AnimatePresence mode="wait">
          <Preloader />
        </AnimatePresence>
      ) : (
        <>
          <div className="relative">
            <div className="absolute inset-0">
              <Canvas>
                <Stars radius={50} count={30000} factor={3} fade speed={2} />
              </Canvas>
            </div>
            <Header />
            <NavBottom />
            <Hero />
            <Showcase />
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-form-gradient opacity-30" />
            <HorizontalScrolling />
            <LetsTalk />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
