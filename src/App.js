import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./Component/About";
import { Header } from "./Component/Header";
import { Hero } from "./Component/Hero";
import { Experience } from "./Component/Experience";
import { experience, education } from "../src/Component/data.js";
import { Skills } from "./Component/Skills";
import { Projects } from "./Component/Projects";

function App() {
  return (
    <div
      className=" text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 "
      style={{ backgroundColor: "rgb(36 36 36)" }}
    >
      <Header></Header>
      <Hero />
      <About />
      <Experience exps={education} id={"education"} />
      <Experience exps={experience} id={"experience"} />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
