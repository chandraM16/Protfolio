import React from "react";
import { motion } from "framer-motion";
import html from "../Assets/html.png";
import redux from "../Assets/redux.png";

export const Project = ({ project }) => {
  return (
    <article className="flex flex-col items-center justify-center space-y-2 flex-shrink-0 w-full h-auto snap-center bg-transparent  overflow-x-hidden">
      <div className="p-4 w-full sm:w-2/3 flex flex-col items-center">
        <div className="flex flex-col w-full sm:flex-row items-center">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            src={project.logo}
            alt="photo"
            className="w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover"
          />
          <div className="m-4 text-left ">
            <h4 className="text-2xl sm:text-4xl font-light">{project.name}</h4>
            <p className="font-bold text-2xl my-2">{project.company}</p>
            <p className="uppercase  text-gray-300 text-left ">
              Started from{" "}
              <span className=" text-[#F7AB0A]">{project.start}</span> to{" "}
              <span className=" text-[#F7AB0A]">{project.end}</span>
            </p>
            <div className="flex space-x-2 mt-2">
              <a href={project.repo} target="_blank" rel="noreferrer">
                <img
                  src="https://icon-library.com/images/data-repository-icon/data-repository-icon-5.jpg"
                  alt=" Repository"
                  className="w-10"
                />
              </a>
              <a href={project.site} target="_blank" rel="noreferrer">
                <img
                  src="https://www.freeiconspng.com/thumbs/website-icon/website-icon-11.png"
                  alt=" Repository"
                  className="w-10 "
                />
              </a>
            </div>
          </div>
        </div>
        <div className="text-left w-full  flex flex-col justify-between ">
          <div className="flex  my-2">
            {project.skills.map((skill) => {
              return (
                <img
                  key={skill.name}
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 mx-2 rounded-full"
                />
              );
            })}
          </div>
          <ul className="list-disc   ml-2 text-lg w-full px-4">
            {project.features.map((feature) => {
              return <li key={feature}>{feature}</li>;
            })}
          </ul>
        </div>
      </div>
    </article>
  );
};
