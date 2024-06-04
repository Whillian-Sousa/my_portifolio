import { motion } from "framer-motion";

const Inner = ({ children }) => {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <div>
      {/* <motion.div className="fixed top-0 left-0 w-screen h-screen" /> */}
      <motion.div {...anim(opacity)}>{children}</motion.div>
    </div>
  );
};

export default Inner;
