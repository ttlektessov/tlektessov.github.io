import React from "react";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";
export default function Contact() {
  return (
    <section id="contact" className="py-10">
      <p className="text-center text-lg">Get in Touch</p>
      <h1 className="text-3xl text-center font-bold">Contact Me</h1>
      <div className="flex flex-col items-center mt-5">
        <div className="flex items-center mb-4">
          <img src={emailIcon} alt="Email icon" className="h-10 w-10 mr-2" />
          <p className="text-lg">
            <a href="mailto:ttlektessov@gmail.com" className="text-blue-500">
              ttlektessov@gmail.com
            </a>
          </p>
        </div>
        <div className="flex items-center">
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
              className="text-blue-500"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
