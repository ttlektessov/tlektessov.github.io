import React from "react";
import linkedinIcon from "../../assets/linkedin.png";
import emailIcon from "../../assets/email.png";
export default function Contact() {
  return (
    <section id="contact" className="contact-me-section">
      <p className="text-center text-lg">Get in Touch</p>
      <h1 className="text-center text-[3rem] font-bold">Contact Me</h1>
      <div className="m-[2rem_auto] flex justify-center rounded-4xl border-[0.1rem] border-solid border-[#353535] p-[0.5rem]">
        <div className="m-[1rem] flex items-center justify-center gap-[0,5rem] p-[1rem]">
          <img src={emailIcon} alt="Email icon" className="mr-2 h-10 w-10" />
          <p className="text-lg">
            <a href="mailto:ttlektessov@gmail.com" className="text-black">
              ttlektessov@gmail.com
            </a>
          </p>
        </div>
        <div className="m-[1rem] flex items-center justify-center gap-[0,5rem] p-[1rem]">
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
            className="mr-2 h-10 w-10"
          />
          <p className="text-lg">
            <a
              href="https://www.linkedin.com/in/tlektessov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
