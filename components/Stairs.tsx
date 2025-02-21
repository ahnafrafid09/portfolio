"use client";
import { motion } from "framer-motion";

// variant
const stairsAnimataion = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index for staggred delay
const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index + 1;
};

const Stairs = () => {
  return (
    <>
      {/* render 6 motion divs,  */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairsAnimataion}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
