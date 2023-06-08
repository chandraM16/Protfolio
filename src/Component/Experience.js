import React from "react";
import { motion } from "framer-motion";
import { ExpCard } from "./ExpCard";

export const Experience = ({ exps, id }) => {
  return (
    <section id={id} className="snap-center no-scrollbar">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col h-screen xl:h-screen text-center px-10 justify-evenly mx-auto items-center relative overflow-scroll "
      >
        <h3 className="w-4/5 mt-16 uppercase tracking-[15px] sm:tracking-[30px] text-gray-400 text-2xl absolute top-2 text-center">
          {id}
        </h3>
        <motion.div
          initial={{ x: 400 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}

          className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory absolute top-28 no-scrollbar mt-2"
       
        >
          {exps?.map((exp, i) => {
            return <ExpCard key={i} exp={exp} />;
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};
