import React from "react";
import patronWebsite from "../assets/patron_website.png";
import mindsightMobile from "../assets/mindsight_mobile.png";
import adminPage from "../assets/admin_page.png";
export default function Projects() {
  const projectData = [
    {
      title: "Patron",
      image: patronWebsite,
      demoLink: "https://youtu.be/aoQ_UkyYj5c",
    },
    {
      title: "Mindsight Mobile App",
      image: mindsightMobile,
      appStoreLink:
        "https://apps.apple.com/kr/app/mindsight-meditation-sleep/id6483054091",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.nodamen.mindsight.app&pcampaignid=web_share",
      demoLink: "https://youtu.be/HLyOmjkndec",
    },
    {
      title: "Mindsight Admin Page",
      image: adminPage,
      demoLink: "https://youtu.be/S3Iaz10erTA",
    },
  ];

  return (
    <section id="projects" className="py-10">
      <h1 className="text-4xl text-center mb-5">Projects</h1>
      <p className="text-center mb-10">that I worked on</p>
      <div className="flex flex-wrap justify-center">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="max-w-sm m-4 p-4 border rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-2xl text-center mt-2">{project.title}</h2>
            <div className="flex justify-center mt-4">
              {project.appStoreLink && (
                <a
                  href={project.appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-color-2 mx-2"
                >
                  App Store
                </a>
              )}
              {project.playStoreLink && (
                <a
                  href={project.playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-color-2 mx-2"
                >
                  Play Market
                </a>
              )}
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-color-2 mx-2"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
