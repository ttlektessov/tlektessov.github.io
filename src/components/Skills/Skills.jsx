import { useTranslation } from "react-i18next";
import Container from "../General/Container";
import SectionTag from "../General/SectionTag";
import SkillsLogos from "./SkillsLogos";

export default function Skills() {
  const { t } = useTranslation();
  return (
    <Container id="skills" className="bg-gray-default">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <SectionTag label={t("skills_s.title")} />
        </div>
        <p className="subtitle max-w-xl text-center">{t("skills_s.intro")}</p>
      </div>
      <div className="grid grid-cols-2 gap-y-4 md:gap-y-8 lg:grid-cols-4 lg:gap-y-12">
        <SkillsLogos />
      </div>
    </Container>
  );
}
