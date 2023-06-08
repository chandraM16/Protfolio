import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
export const Header = () => {
  return (
    <header className="sticky top-0 p-4 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center" >
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flow-row items-center"
      >
        <SocialIcon
          url="https://wa.me/8208960490"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/chandraM16"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/chandan-marghade-510197178/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          url="https://gmail.com/"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};
