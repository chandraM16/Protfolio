import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

export const Contact = () => {
  return (
    <section id="contact" className="snap-start xl:snap-center   ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col h-screen text-center px-10 justify-evenly mx-auto items-center relative  overflow-scroll md:overflow-hidden"
      >
        <h3 className="w-4/5 mt-16 uppercase tracking-[30px] text-gray-400 text-2xl absolute top-2 text-center">
          Contact Me
        </h3>

        <div className="flex flex-col space-y-10 mt-[12rem] sm:mt-28">
          <h4 className="text-4xl font-semibold, text-center">
            I have got just what you need
            <span className="decoration-[#f7ab0a]/50 underline block my-1">
              Lets Talk
            </span>
          </h4>

          <div className="space-y-10">
            <div className="flex items-center space-x-5">
              <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
              <p className="text-2xl">+91 8208960490</p>
            </div>
            <div className="flex items-center space-x-5">
              <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
              <p className="text-2xl">chandanmarghade@gmail.com</p>
            </div>
            <div className="flex items-center space-x-5">
              <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
              <p className="text-2xl">
                34, BhagyaShree Nagar, Kharbi Road, Nagpur, Maharashtra, India,
                440024.
              </p>
            </div>
            <div className="flex items-center space-x-5">
              <RocketLaunchIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
              <p className="text-2xl">
                Looking For{" "}
                <span className=" text-orange-400">Front End Developer</span>,{" "}
                <span className=" text-orange-400">React Developer</span> role.
              </p>
            </div>
            <div className="flex items-center space-x-5">
              <PuzzlePieceIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
              <p className="text-2xl">
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
                <SocialIcon
                  url="https://gmail.com/"
                  network="email"
                  fgColor="gray"
                  bgColor="transparent"
                />
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
