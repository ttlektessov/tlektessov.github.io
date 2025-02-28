import React from "react";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";
export default function Contact() {
  return (
    <section id="contact" className="contact-me-section">
      <p className="text-center text-lg">Get in Touch</p>
      <h1 className="text-[3rem] text-center font-bold">Contact Me</h1>
      <div className="flex justify-center m-[2rem_auto] p-[0.5rem] rounded-4xl border-[#353535] border-solid border-[0.1rem]">
        <div className="flex items-center justify-center gap-[0,5rem] m-[1rem] p-[1rem]">
          <img src={emailIcon} alt="Email icon" className="h-10 w-10 mr-2" />
          <p className="text-lg">
            <a href="mailto:ttlektessov@gmail.com" className="text-black">
              ttlektessov@gmail.com
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center gap-[0,5rem] m-[1rem] p-[1rem]">
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
            className="h-10 w-10 mr-2"
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
