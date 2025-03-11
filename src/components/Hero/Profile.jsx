import Container from "../General/Container";
import { images } from "../../assets";
import { useResponsive } from "../Hooks/useResponsive";
import SocialIcons from "../General/SocialIcons";

export default function Profile() {
  const { isMobile } = useResponsive();

  return (
    <Container id="hero" className="bg-gray-default">
      <div className="flex flex-col gap-12 md:flex-row">
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="bg-gray-default mx-0 my-auto h-[350px] w-[350px]">
            <img
              className="h-full w-full rounded-full object-cover"
              src={images.profilePic}
              alt="Temirlan Tlektessov profile picture"
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
              <span className="body2">Available for new projects</span>
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
        Hey there,
        <br />
        nice to meet you!
        <span className="animate-waving-hand inline-block text-[72px]">👋</span>
      </p>
      <p className="body2 mt-8">
        From: Temirlan Tlektessov
        <br />
        Frontend Developer @ {"(this could be your company name! :D)"}
      </p>
    </>
  );
}

function Mobile() {
  return (
    <>
      <p className="h1">
        Hey there!
        <span className="animate-waving-hand inline-block text-[72px]">👋</span>
      </p>
      <p className="body2 mt-8">
        I&apos;m Temirlan Tlektessov,
        <br />
        Frontend Developer @ {"(this could be your company name! :D)"}
      </p>
    </>
  );
}
