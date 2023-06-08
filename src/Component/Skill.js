import React from "react";
import { motion } from "framer-motion";
export const Skill = ({ skill }) => {
  const { logo, percentage } = skill;
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        src={logo}
        alt="skill-logo"
        className="rounded-full border border-gray-500 object-cover w-14 h-14 sm:w-24 sm:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 "
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in group-hover:bg-white w-14 h-14 sm:w-24 sm:h-24 xl:w-28 xl:h-28 rounded-full z-0 ">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {percentage}%
          </p>
        </div>
      </div>
    </div>
  );
};
