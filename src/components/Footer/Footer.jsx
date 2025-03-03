import React from "react";

export default function Footer() {
  return (
    <footer className="m-[0_1rem] h-[26vh]">
      <nav className="align-center flex h-[17vh] justify-around">
        <div className="">
          <ul className="style-none flex gap-[2rem]">
            <li>
              <a
                href="#about"
                className="text-[1.75rem] text-black hover:text-gray-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-[1.75rem] text-black hover:text-gray-500"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-[1.75rem] text-black hover:text-gray-500"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-[1.75rem] text-black hover:text-gray-500"
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
