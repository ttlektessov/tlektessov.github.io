import React from "react";
import profilePic from "../assets/profile-pic.png";
import resumePdf from "../assets/Temirlan_Tlektessov_Resume.pdf";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";

export default function Profile() {
  return (
    <section id="profile" className="profile-section">
      <div className="w-[400px] h-[400px] my-auto mx-0">
        <img src={profilePic} alt="Temirlan Tlektessov profile picture" />
      </div>
      <div className="self-center text-center">
        <p className="font-semibold">Hey there, I'm</p>
        <h1 className="title text-[3rem] font-bold">Temirlan Tlektessov</h1>
        <p className="text-[1.75rem] font-bold mb-[1rem]">
          Frontend Software Engineer
        </p>
        <div className="flex justify-center gap-4">
          <button
            className="border-[0.1rem] border-[#353535]  
            hover:bg-[#353535] hover:text-white"
            onClick={() => window.open(resumePdf)}
          >
            Download CV
          </button>
          <button
            className="border-[0.1rem] border-[#353535] bg-[#353535] text-white
            hover:bg-black"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
        <div
          id="socials-container"
          className="flex justify-center mt-[1rem] gap-[1rem]"
        >
          <img
            src={linkedinIcon}
            alt="My LinkedIn profile"
            className="icon cursor-pointer h-[2rem]"
            onClick={() =>
              window.open("https://linkedin.com/in/tlektessov", "_blank")
            }
          />
          <img
            src={githubIcon}
            alt="My Github profile"
            className="icon cursor-pointer h-[2rem]"
            onClick={() =>
              window.open("https://github.com/ttlektessov", "_blank")
            }
          />
        </div>
      </div>
    </section>
  );
}
