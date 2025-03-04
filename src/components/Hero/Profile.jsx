import React from "react";
import Container from "../General/Container";
import { images } from "../../assets";
import { useResponsive } from "../Hooks/useResponsive";
import IconButton from "../General/IconButton";

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
        I'm Temirlan Tlektessov,
        <br />
        Frontend Developer @ {"(this could be your company name! :D)"}
      </p>
    </>
  );
}

export default function Profile() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  return (
    <Container id="hero">
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
          <div className="flex gap-1">
            <IconButton
              onClick={() =>
                window.open("https://github.com/ttlektessov", "_blank")
              }
            >
              <img
                src={images.LogoGithub}
                alt="GitHub"
                width="24"
                height="24"
                className="dark:invert"
              />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://linkedin.com/in/tlektessov", "_blank")
              }
            >
              <img
                src={images.LogoLinkedin}
                alt="LinkedIn"
                width="24"
                height="24"
                className="dark:invert"
              />
            </IconButton>
          </div>
          {/* <SocialIcons /> */}
        </div>
      </div>
    </Container>
    // <section id="profile" className="profile-section">
    //   <div className="bg-gray-default mx-0 my-auto h-[400px] w-[400px]">
    //     <img src={profilePic} alt="Temirlan Tlektessov profile picture" />
    //   </div>
    //   <div className="self-center text-center">
    //     <p className="h2">Hey there, I'm</p>
    //     <h1 className="text-[3rem] font-bold">Temirlan Tlektessov</h1>
    //     <p className="mb-[1rem] text-[1.75rem] font-bold">
    //       Frontend Software Engineer
    //     </p>
    //     <div className="flex justify-center gap-4">
    //       <button
    //         className="border-[0.1rem] border-[#353535] hover:bg-[#353535] hover:text-white"
    //         onClick={() => window.open(resumePdf)}
    //       >
    //         Download CV
    //       </button>
    //       <button
    //         className="border-[0.1rem] border-[#353535] bg-[#353535] text-white hover:bg-black"
    //         onClick={() => (window.location.href = "./#contact")}
    //       >
    //         Contact Info
    //       </button>
    //     </div>
    //     <div
    //       id="socials-container"
    //       className="mt-[1rem] flex justify-center gap-[1rem]"
    //     >
    //       <img
    //         src={linkedinIcon}
    //         alt="My LinkedIn profile"
    //         className="icon h-[2rem] cursor-pointer"
    //         onClick={() =>
    //           window.open("https://linkedin.com/in/tlektessov", "_blank")
    //         }
    //       />
    //       <img
    //         src={githubIcon}
    //         alt="My Github profile"
    //         className="icon h-[2rem] cursor-pointer"
    //         onClick={() =>
    //           window.open("https://github.com/ttlektessov", "_blank")
    //         }
    //       />
    //     </div>
    //   </div>
    // </section>
  );
}
