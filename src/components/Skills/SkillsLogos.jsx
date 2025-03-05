import LogoJavascript from "../../assets/images/logos/icon-javascript.svg";
import LogoReact from "../../assets/images/logos/icon-react.svg";
import LogoNodejs from "../../assets/images/logos/icon-nodejs.svg";
import LogoExpress from "../../assets/images/logos/icon-express.svg";
import LogoExpressLight from "../../assets/images/logos/icon-express-light.svg";
import LogoPostgreSQL from "../../assets/images/logos/icon-postgresql.svg";
import LogoSass from "../../assets/images/logos/icon-sass.svg";
import LogoTailwindcss from "../../assets/images/logos/icon-tailwindcss.svg";
import LogoGit from "../../assets/images/logos/icon-git.svg";
const skills = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];
export default function SkillsLogos({ darkMode }) {
  return (
    <>
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <a
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
          >
            <img
              src={
                darkMode === "dark" && skill.darkModeLogo
                  ? skill.darkModeLogo
                  : skill.logo
              }
              alt={skill.label}
              className="transition-transform duration-300 md:hover:scale-110"
            />
          </a>
          <p className="body1">{skill.label}</p>
        </div>
      ))}
    </>
  );
}
