import React from "react";
import { motion } from "framer-motion";

export const ExpCard = ({ exp }) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[100%] md:w-[80%] xl:w-[65%] h-auto snap-center bg-[#292929] p-4 sm:px-4 opacity-20 hover:opacity-100 transition-opacity duration-300 overflow-x-hidden">
      <div className="px-0 md:px-10 w-full flex flex-col items-center ">
        <div className="flex w-full">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 25 }}
            transition={{ duration: 1.3 }}
            viewport={{ once: true }}
            src={exp.logo}
            alt="photo"
            className="w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover"
          />
          <div className="m-4 text-left">
            <h4 className="text-2xl sm:text-4xl font-light">{exp.name}</h4>
            <p className="font-bold text-2xl my-2">{exp.company}</p>
            <p className="uppercase  text-gray-300 text-left ">
              Started from <span className=" text-[#F7AB0A]">{exp.start}</span>{" "}
              to <span className=" text-[#F7AB0A]">{exp.end}</span>
            </p>
          </div>
        </div>
        <div className="flex space-x-2 my-2">
          {/* <img src={html} alt="" className="w-10" />
          <img src={redux} alt="" className="w-10" /> */}
        </div>
        <div className="text-left w-full mt-7 flex flex-col items-center sm:flex-row sm:justify-between ">
          <ul className="list-disc space-y-4 ml-2 text-lg w-full px-4">
            {exp.tasks &&
              exp.tasks.map((task) => {
                return (
                  <li key={task} className=" text-[#F7AB0A]">
                    {task}
                  </li>
                );
              })}
          </ul>
          {exp.certificate && (
            <div className="w-auto cursor-pointer">
              <a href={exp.certificate} target="_blank" rel="noreferrer">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/016/348/596/original/graduation-hat-with-diploma-certificate-roll-png.png"
                  alt=""
                  className="w-56 bg-transparent"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
