import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BackgroundCircle } from "./BackgroundCircle";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [text, setText] = useTypewriter({
    words: [
      "<Welcome_my_friend />",
      "Hi, I am Chandan ",
      "< A_front_end_engineer.jsx />",
      "upcoming_full_stack_developer.js",
      "{ a_guy_who_love_Coffee.css }",
      "<h1> a_curious_student.html </h1>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section id="hero" className="snap-start ">
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircle />
        <img
          className="relative top-20 rounded-full h-32 w-32 mx-auto object-cover"
          src="https://avatars.githubusercontent.com/u/106267404?v=4"
          alt="Profile Pic "
        />
        <div>
          <h2 className="relative top-16 text-sm uppercase text-gray-400 pb-2 tracking-[18px]">
            Software Engineer
          </h2>
          <h1 className="relative top-20 text-2xl lg:text-5xl font  px-10 h-20">
            <span>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>

          <div className="mt-28 relative z-20  ">
            <a href="#about">
              <button className="heroBtnClass">About</button>
            </a>
            <a href="#skill">
              <button className="heroBtnClass">Skill</button>
            </a>
            <a href="#education">
              <button className="heroBtnClass">Education</button>
            </a>

            <a href="#experience">
              <button className="heroBtnClass">Experience</button>
            </a>
            <a href="#project">
              <button className="heroBtnClass">Project</button>
            </a>
            <a href="#contact">
              <button className="heroBtnClass">Contact</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
