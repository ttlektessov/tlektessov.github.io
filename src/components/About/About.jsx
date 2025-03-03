import React from "react";
import aboutPic from "../../assets/about-pic.png";
import experiencePng from "../../assets/experience.png";
import educationPng from "../../assets/education.png";
import arrowPng from "../../assets/arrow.png";
export default function About() {
  return (
    <section id="about" className="relative flex-col py-10">
      <h1 className="text-center text-[3rem] font-bold">About Me</h1>
      <div className="flex h-[80%] gap-[4rem]">
        <div className="m-[auto_0] h-[400px] w-[400px]">
          <img
            src={aboutPic}
            alt="Profile picture"
            className="rounded-3xl object-cover shadow-lg"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <div className="mb-[2rem] flex gap-[2rem]">
            <div className="details-container">
              <img src={experiencePng} alt="Experience icon" className="icon" />
              <h3 className="text-2xl">Experience</h3>
              <p>
                1.5 years in
                <br />
                Frontend Software Development &<br />
                Flutter Mobile Development
              </p>
            </div>
            <div className="details-container">
              <img src={educationPng} alt="Education icon" className="icon" />
              <h3 className="text-2xl">Education</h3>

              <p>
                B.Sc. Bachelors Degree in
                <br />
                Computer Science & Engineering
                <br />
                Double Major in International Studies
              </p>
            </div>
          </div>
          <div>
            <p>
              I'm Tim, a recent grad with a degree in Computer Science &
              Engineering and International Studies from Korea University. My
              journey has been a blend of technology and global perspectives. At
              NODAMEN, I was responsible for the development, optimization, and
              bug fixing of web services as a Frontend Developer. These web
              services showcased digital exhibitions curated by staff, allowing
              users to enjoy 4K digital artworks on PCs, mobile devices, and
              TVs. I was also a Flutter developer responsible for developing web
              admin page for the content curation on mobile application, as well
              as development, optimizing & bug fixing of the mobile application.
              My goal is to continually expand my abilities in front-end
              development and create impactful user experiences. You can see the
              projects I've worked on in the "Projects" section!
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowPng}
        alt="Arrow icon"
        className="icon arrow icon absolute right-[-5rem] bottom-[2.5rem] mt-8 cursor-pointer"
        onClick={() => (window.location.href = "#experience")}
      />
    </section>
  );
}
