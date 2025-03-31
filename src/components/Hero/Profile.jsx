import Container from "../General/Container";
import { images } from "../../assets";
import { useResponsive } from "../Hooks/useResponsive";
import SocialIcons from "../General/SocialIcons";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

export default function Profile() {
  const { isMobile } = useResponsive();
  const { t } = useTranslation();

  return (
    <Container id="hero_s" className="bg-gray-default">
      <div className="flex flex-col gap-12 md:flex-row">
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="bg-gray-default mx-0 my-auto h-[350px] w-[350px]">
            <img
              className="h-full w-full rounded-full object-cover"
              src={images.profilePic}
              alt="profile picture"
            />
          </div>
        </div>
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            {isMobile ? <Mobile /> : <Desktop />}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <span className="body2">{t("hero_s.projects")}</span>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
}

function Desktop() {
  return (
    <>
      <p className="h1">
        <Trans i18nKey="hero_s.hello" />
        <span className="animate-waving-hand inline-block text-[72px]">👋</span>
      </p>
      <p className="body2 mt-8">
        <Trans i18nKey="hero_s.intro" />
      </p>
    </>
  );
}

function Mobile() {
  return (
    <>
      <p className="h1">
        <Trans i18nKey="hero_s.hello_mobile" />
        <span className="animate-waving-hand inline-block text-[72px]">👋</span>
      </p>
      <p className="body2 mt-8">
        <Trans i18nKey="hero_s.intro_mobile" />
      </p>
    </>
  );
}
