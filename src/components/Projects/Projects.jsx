import React from "react";
import arrowPng from "../../assets/arrow.png";
import ProjectsContainer from "./ProjectsContainer";

export default function Projects() {
  return (
    <section id="projects" className="relative py-10">
      <h1 className="text-center text-[3rem] font-bold">Projects</h1>
      <p className="mb-10 text-center text-lg">that I worked on</p>
      <div className="my-[2rem] flex flex-wrap justify-center gap-[2rem]">
        <ProjectsContainer />
      </div>
      <img
        src={arrowPng}
        alt="Arrow icon"
        className="icon arrow icon absolute right-[-5rem] bottom-[0.5rem] mt-8 cursor-pointer"
        onClick={() => (window.location.href = "#contact")}
      />
    </section>
  );
}
