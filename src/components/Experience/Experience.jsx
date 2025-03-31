import SectionTag from "../General/SectionTag";
import Container from "../General/Container";
import ExpsContainer from "./ExpsContainer";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();
  return (
    <>
      <Container id="experience" className="bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <SectionTag label={t("experience_s.title")} />
          </div>
          <p className="subtitle max-w-xl text-center">
            {t("experience_s.intro")}
          </p>
        </div>
        <ExpsContainer />
      </Container>
    </>
  );
}
