import patronWebsite from "../../assets/patron_website.png";
import mindsightMobile from "../../assets/mindsight_mobile.png";
import adminPage from "../../assets/admin_page.png";
export default function ProjectsContainer() {
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
    <>
      {projectData.map((project, index) => (
        <div
          key={index}
          className="bg-[rgb(250, 250, 250)] max-w-lg h-full shadow-lg p-[1.5rem] flex-1 border-[#353535] border-solid rounded-[2rem] border-[0.1rem]"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-[90%] h-[90%] object-cover rounded-4xl m-[0_auto]"
          />

          <h2 className="text-[1.75rem] font-bold text-center m-[1rem]">
            {project.title}
          </h2>
          <div className="flex justify-center gap-[1rem]">
            {project.appStoreLink && (
              <button
                onClick={() => window.open(project.appStoreLink, "_blank")}
                className="border-[0.1rem] border-[#353535]  
              hover:bg-[#353535] hover:text-white"
              >
                App Store
              </button>
            )}
            {project.playStoreLink && (
              <button
                onClick={() => window.open(project.playStoreLink, "_blank")}
                className="border-[0.1rem] border-[#353535]  
              hover:bg-[#353535] hover:text-white"
              >
                Play Market
              </button>
            )}
            <button
              onClick={() => window.open(project.demoLink, "_blank")}
              className="border-[0.1rem] border-[#353535]  
            hover:bg-[#353535] hover:text-white"
            >
              Live Demo
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
