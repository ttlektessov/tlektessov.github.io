import React from "react";
import aboutPic from "../assets/about-pic.png";
import experiencePng from "../assets/experience.png";
import educationPng from "../assets/education.png";
import arrowPng from "../assets/arrow.png";
export default function About() {
  return (
    <section id="about" className="py-10 relative flex-col">
      <h1 className="text-[3rem] text-center font-bold">About Me</h1>
      <div className="flex h-[80%] gap-[4rem]">
        <div className="m-[auto_0] flex-shrink-0 h-[400px] w-[400px]">
          <img
            src={aboutPic}
            alt="Profile picture"
            className="rounded-3xl shadow-lg object-cover"
          />
        </div>
        <div className="flex justify-center flex-col">
          <div className="flex gap-[2rem] mb-[2rem]">
            <div className="details-container">
              <img src={experiencePng} alt="Experience icon" className="icon" />
              <h3 className="text-2xl">Experience</h3>
              <p>
                2 years in
                <br />
                Frontend Software Development & Flutter Mobile Development
              </p>
            </div>
            <div className="details-container">
              <img src={educationPng} alt="Education icon" className="icon" />
              <h3 className="text-2xl">Education</h3>

              <p>
                B.Sc. Bachelors Degree in
                <br />
                Computer Science & Engineering, Double Major in International
                Studies
              </p>
            </div>
          </div>
          <div>
            <p>
              I'm Tim, a recent grad with a degree in Computer Science &
              Engineering and International Studies from Korea University. My
              journey has been a blend of technology and global perspectives. At
              NODAMEN, our team developed dynamic admin pages and enhanced
              application features through robust Flutter development and
              responsive web design. Upholding user-centric values, I've
              contributed to seamless integrations and collaborated with UX/UI
              designers for cross-device compatibility. My goal is to
              continually expand my expertise in front-end development,
              leveraging a collaborative approach to drive innovation and create
              impactful user experiences.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowPng}
        alt="Arrow icon"
        className="icon arrow mt-8 cursor-pointer absolute bottom-[2.5rem] right-[-5rem] icon"
        onClick={() => (window.location.href = "#experience")}
      />
    </section>
  );
}
