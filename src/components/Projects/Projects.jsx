import ProjectsContainer from "./ProjectsContainer";
import Container from "../General/Container";
import SectionTag from "../General/SectionTag";
import { images } from "../../assets";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const MyProjects = [
    {
      name: t("projects_s.patron_name"),
      description: t("projects_s.patron_description"),
      url: t("projects_s.patron_url"),
      previewImage: images.PatronWebsite,
      technologies: t("projects_s.patron_technologies", {
        returnObjects: true,
      }),
    },
    {
      name: t("projects_s.mindsight_name"),
      description: t("projects_s.mindsight_description"),
      url: t("projects_s.mindsight_url"),
      previewImage: images.MindsightMobile,
      technologies: t("projects_s.mindsight_technologies", {
        returnObjects: true,
      }),
    },
    {
      name: t("projects_s.mindsight_admin_name"),
      description: t("projects_s.mindsight_admin_description"),
      url: t("projects_s.mindsight_admin_url"),
      previewImage: images.MindsightDashboard,
      technologies: t("projects_s.mindsight_admin_technologies", {
        returnObjects: true,
      }),
    },
  ];

  return (
    <Container id="projects">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <SectionTag label={t("projects_s.title")} />
        </div>
        <p className="subtitle max-w-xl text-center">{t("projects_s.intro")}</p>
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
