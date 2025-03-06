import React from "react";
import ProjectsContainer from "./ProjectsContainer";
import Container from "../General/Container";
import SectionTag from "../General/SectionTag";
import { images } from "../../assets";

export default function Projects() {
  return (
    <Container id="projects">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <SectionTag label="Work" />
        </div>
        <p className="subtitle max-w-xl text-center">
          Some of the projects I worked on:
        </p>
      </div>
      {MyProjects.map((project, index) => (
        <ProjectsContainer
          key={index}
          project={project}
          layout={index % 2 === 0 ? "default" : "reverse"}
        />
      ))}
    </Container>
  );
}

const MyProjects = [
  {
    name: "Patron Website",
    description: `A platform for digital exhibitions curated by Nodamen's staff, allowing users to enjoy 4K digital artworks on PC, mobile and TV.`,
    url: "https://youtu.be/aoQ_UkyYj5c",
    previewImage: images.PatronWebsite,
    technologies: [
      "HTML",
      "JS",
      "SCSS",
      "Postman",
      "PostgreSQL",
      "JQuery",
      `QC\QA`,
      "Git",
      "Figma",
    ],
  },
  {
    name: "Mindsight: Meditation & Sleep",
    description:
      "Mobile application for mental healthcare combined with artworks and more.",
    url: "https://youtu.be/HLyOmjkndec",
    previewImage: images.MindsightMobile,
    technologies: ["Flutter", "Dart", "GetX", "Git", "Figma"],
  },
  {
    name: "Mindsight Admin Panel",
    description:
      "Admin panel for the Mindsight app, allowing the staff to manage users, content, and more.",
    url: "https://youtu.be/S3Iaz10erTA",
    previewImage: images.MindsightDashboard,
    technologies: ["Flutter", "Dart", "GetX", "Git", "Figma"],
  },
];
