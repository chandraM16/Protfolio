import React from "react";
import { motion } from "framer-motion";
import { Project } from "./Project";
import { projects } from "./data";
export const Projects = () => {
  return (
    <section id="project" className="snap-center no-scrollbar overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col h-screen xl:h-screen text-center px-10 justify-evenly mx-auto items-center relative overflow-scroll md:overflow-hidden "
      >
        <h3 className="w-4/5 mt-16 uppercase tracking-[15px] sm:tracking-[30px] text-gray-400 text-2xl absolute top-2 text-center">
          Project
        </h3>

        <div className=" w-full absolute top-24 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 flex mt-4 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 ">
          {projects.map((project, i) => {
            return <Project key={project.name} project={project} />;
          })}
        </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
      </motion.div>
    </section>
  );
};
