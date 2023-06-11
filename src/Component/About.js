import React from "react";
import { motion } from "framer-motion";
import chandanPic from "../Assets/chandanPic.jpeg";
export const About = () => {
  return (
    <section id="about" className="snap-start xl:snap-center  ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col h-screen text-center px-10 justify-evenly mx-auto items-center relative overflow-scroll overflow-x-hidden "
      >
        <h3 className="w-4/5 mt-16 uppercase tracking-[30px] text-gray-400 text-2xl absolute top-2 text-center">
          About
        </h3>

        <div className="flex flex-col justify-start items-center xl:mt-32 py-4 xl:flex-row xl:justify-evenly absolute top-28 xl:top-0">
          <motion.img
            src={chandanPic}
            alt="photo"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className=" md:mb-0 flex-shrink-0 w-44 h-44 rounded-full sm:w-72 sm:h-72  xl:w-[350px] xl:h-[450px] xl:rounded-lg "
          />
          <div className="w-full h-full flex flex-col justify-start mt-12  xl:w-1/2 ">
            <h3 className="text-2xl font-semibold text-center mb-10">
              Here, My{" "}
              <span className="underline decoration-[#F7AB0A]">Little</span>{" "}
              Background
            </h3>
            <motion.div
              initial={{ y: 200 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="w-full text-center px-4 "
            >
              <p>
                As a currently perusing{" "}
                <span className=" text-orange-400">
                  Full Stack Development{" "}
                </span>{" "}
                from <span className=" text-orange-400">NEWTON SCHOOL</span> , I
                have developed a strong passion for front-end development and a
                deep understanding of{" "}
                <span className=" text-orange-400">HTML, CSS, </span> and{" "}
                <span className=" text-orange-400">JavaScript</span> . With a
                keen eye for design and a strong desire to build{" "}
                <span className=" text-orange-400">
                  {" "}
                  user-friendly web applications
                </span>
                , I am excited to begin my career in the field.
              </p>
              <br />
              <p>
                In my projects and coursework, I have gained hands-on experience
                in using various front-end frameworks, such as
                <span className=" text-orange-400"> React</span> and{" "}
                <span className=" text-orange-400">Redux</span> along with that{" "}
                <span className=" text-orange-400">
                  Bootstrap, Tailwind CSS,
                </span>{" "}
                and <span className=" text-orange-400">Material UI</span> for
                CSS, to develop responsive, mobile-friendly web applications. I
                am also proficient in using version control tools like{" "}
                <span className=" text-orange-400">Git</span> and have
                experience in collaborating with other developers in a{" "}
                <span className=" text-orange-400">team environment.</span>
              </p>
              <br />
              <p>
                I am eager to contribute my skills and knowledge to a dynamic
                organization where I can learn and{" "}
                <span className=" text-orange-400">grow as a developer</span> .
                I am committed to staying up-to-date with the latest trends and
                best practices in the industry and am excited to be a part of
                the fast-paced world of{" "}
                <span className=" text-orange-400">web development.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
