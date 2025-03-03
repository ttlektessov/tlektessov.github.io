import React from "react";
import arrowPng from "../../assets/arrow.png";
import ExperienceContainer from "./ExperienceContainer";
export default function Experience() {
  const frontExp = {
    title: "Frontend Development",
    skills: [
      { name: "Dart", level: "Experienced" },
      { name: "HTML", level: "Experienced" },
      { name: "SCSS", level: "Experienced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "Tailwindcss", level: "Intermediate" },
    ],
  };
  const relSkills = {
    title: "Relevant Skills",
    skills: [
      { name: "GetX", level: "Experienced" },
      { name: "RestAPI", level: "Intermediate" },
      { name: "jQuery", level: "Intermediate" },
      { name: "Git", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
    ],
  };
  return (
    <section id="experience" className="relative h-[80vh]!">
      <p className="text-center text-lg">My</p>
      <h1 className="text-center text-[3rem] font-bold">Stack</h1>
      <div className="my-[2rem] flex flex-col justify-center md:flex-row">
        <div className="mx-4 flex flex-col items-center">
          <ExperienceContainer expDetails={frontExp} />
        </div>
        <div className="mx-4 mt-8 flex flex-col items-center md:mt-0">
          <ExperienceContainer expDetails={relSkills} />
        </div>
      </div>
      <img
        src={arrowPng}
        alt="Arrow icon"
        className="icon arrow icon absolute right-[-5rem] bottom-[4.5rem] mt-8 cursor-pointer"
        onClick={() => (window.location.href = "#projects")}
      />
    </section>
  );
}
