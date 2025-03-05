import Container from "../General/Container";
import { images } from "../../assets";
import SectionTag from "../General/SectionTag";
import SkillsLogos from "./SkillsLogos";

export default function Skills({ darkMode }) {
  return (
    <Container id="skills" className="bg-gray-default">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <SectionTag label="Skills" />
        </div>
        <p className="subtitle max-w-xl text-center">
          The skills, tools and technologies I am good at:
        </p>
      </div>
      <div className="grid grid-cols-2 gap-y-4 md:gap-y-8 lg:grid-cols-4 lg:gap-y-12">
        <SkillsLogos darkMode={darkMode} />
      </div>
    </Container>
  );
}
