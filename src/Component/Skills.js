import React from "react";
import { motion } from "framer-motion";
import { Skill } from "./Skill";
import { frontEndSkills, backEndSkills } from "./data";

export const Skills = () => {
  return (
    <section id="skill" className="snap-start">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col h-screen xl:h-screen text-center px-10 justify-evenly mx-auto items-center relative overflow-scroll"
      >
        <h3 className="w-4/5 mt-16 uppercase tracking-[30px] text-gray-400 text-2xl absolute top-2 text-center">
          skills
        </h3>
        <h3 className="uppercase absolute top-36 tracking-[5px] ">
          <span className=" text-[#F7AB0A]">Hover</span> over a skill for
          current proficiency
        </h3>
        <div className="w-4/5 absolute top-32">
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.2 }}
            className=" mt-20 w-full flex flex-wrap justify-evenly items-start gap-4 "
          >
            {frontEndSkills.map((fe_skill) => {
              return <Skill key={fe_skill.skill} skill={fe_skill} />;
            })}
          </motion.div>

          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.2 }}
            className=" mt-20 w-full flex flex-wrap justify-evenly items-start gap-4 "
          >
            {backEndSkills.map((fe_skill) => {
              return <Skill key={fe_skill.skill} skill={fe_skill} />;
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
