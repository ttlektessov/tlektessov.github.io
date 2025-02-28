import React from "react";

export default function Footer() {
  return (
    <footer className="h-[26vh] m-[0_1rem]">
      <nav className="flex justify-around align-center h-[17vh]">
        <div className="">
          <ul className="flex gap-[2rem] style-none">
            <li>
              <a
                href="#about"
                className="text-black hover:text-gray-500 text-[1.75rem]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-black hover:text-gray-500 text-[1.75rem]"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-black hover:text-gray-500 text-[1.75rem]"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-black hover:text-gray-500 text-[1.75rem]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <p className="text-center">
        Copyright &#169; 2025 Temirlan Tlektessov. All Rights Reserved.
      </p>
    </footer>
  );
}
