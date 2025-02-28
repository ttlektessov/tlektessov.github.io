import React from "react";
import arrowPng from "../../assets/arrow.png";
import ProjectsContainer from "./ProjectsContainer";

export default function Projects() {
  return (
    <section id="projects" className="py-10 relative">
      <h1 className="text-[3rem] text-center font-bold">Projects</h1>
      <p className="text-lg text-center mb-10">that I worked on</p>
      <div className="flex flex-wrap justify-center gap-[2rem] my-[2rem]">
        <ProjectsContainer />
      </div>
      <img
        src={arrowPng}
        alt="Arrow icon"
        className="icon arrow mt-8 cursor-pointer absolute bottom-[0.5rem] right-[-5rem] icon"
        onClick={() => (window.location.href = "#contact")}
      />
    </section>
  );
}
