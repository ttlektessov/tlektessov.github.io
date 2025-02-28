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
      <h1 className="text-[3rem] text-center font-bold">Stack</h1>
      <div className="flex flex-col md:flex-row justify-center my-[2rem]">
        <div className="flex flex-col items-center mx-4">
          <ExperienceContainer expDetails={frontExp} />
        </div>
        <div className="flex flex-col items-center mx-4 mt-8 md:mt-0">
          <ExperienceContainer expDetails={relSkills} />
        </div>
      </div>
      <img
        src={arrowPng}
        alt="Arrow icon"
        className="icon arrow mt-8 cursor-pointer absolute bottom-[4.5rem] right-[-5rem] icon"
        onClick={() => (window.location.href = "#projects")}
      />
    </section>
  );
}
