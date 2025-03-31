import Container from "../General/Container";
import SectionTag from "../General/SectionTag";
import { images } from "../../assets";
import { useTranslation } from "react-i18next";
export default function About() {
  const { t } = useTranslation();
  return (
    <Container id="about" className="bg-gray-50">
      <div className="self-center">
        <SectionTag label={t("about_s.title")} />
      </div>
      <div className="flex w-full flex-col justify-evenly md:flex-row">
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[320px] w-[260px] md:h-[380px] md:w-[300px] lg:h-[480px] lg:w-[400px]">
            <img
              src={images.aboutPic}
              alt="Profile picture"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="flex max-w-xl flex-col gap-6">
          <h3 className="h3">{t("about_s.constant")}</h3>
          <p className="body3">{t("about_s.intro1")}</p>
          <p className="body3">{t("about_s.intro2")}</p>
          <p className="body3">{t("about_s.intro3")}</p>
          <p className="body3">{t("info.title")}</p>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <li className="body3">{t("info.one")}</li>
              <li className="body3">{t("info.two")}</li>
            </ul>

            <ul className="flex list-inside list-disc flex-col gap-2">
              <li className="body3">{t("info.three")}</li>
              <li className="body3">{t("info.four")}</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
