import React from "react";
import { motion } from "framer-motion";

export const BackgroundCircle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      opacity
      className="relative flex justify-center items-center top-16 z-10"
    >
      <div className="absolute border border-[#737373] rounded-full h-[600px] w-[600px] mt-60 animate-ping" />
      <div className="rounded-full border border-[#737373]  h-[250px] w-[250px] absolute mt-60 " />
      <div className="rounded-full border border-[#333333]  h-[500px] w-[500px] absolute mt-60 " />
      {/* <div className="rounded-full border border-[#F7AB0A] opacity-100 w-[450px] absolute top-48 animate-pulse" /> */}
      <div className="rounded-full border border-[#F7AB0A] opacity-100 h-[600px] w-[600px] absolute mt-60  animate-pulse" />
      {/* <div className="rounded-full border border-[#333333]  h-[600px] w-[600px] absolute mt-40 " /> */}
    </motion.div>
  );
};
