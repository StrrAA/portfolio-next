import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full  h-[200px] w-[200px] mt-48 sm:mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full sm:h-[300px] h-[200px] sm:w-[300px] w-[200px] mt-48 sm:mt-52" />
      <div className="absolute border border-[#333333] rounded-full sm:h-[500px] h-[400px] sm:w-[500px] w-[400px] mt-48 sm:mt-52" />
      <div className="absolute border border-[#FFE55C] rounded-full sm:h-[650px] h-[550px] sm:w-[650px] w-[550px] mt-48 sm:mt-52 opacity-20 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full sm:h-[800px] h-[700px] sm:w-[800px] w-[700px] mt-48 sm:mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;
