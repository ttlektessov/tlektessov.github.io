import React from "react";
/* TODO: make a component for bordered container in about, experience, project, contact me*/
export default function Navbar() {
  return (
    <nav className="flex justify-around items-center p-4 bg-white shadow-md h-[17vh]">
      <div className="text-4xl font-normal">Temirlan Tlektessov</div>
      <ul className="flex gap-[2rem] text-2xl font-normal">
        <li>
          <a
            onClick={() => (window.location.href = "#about")}
            className="hover:cursor-pointer"
          >
            About
          </a>
        </li>
        <li>
          <a
            onClick={() => (window.location.href = "#experience")}
            className="hover:cursor-pointer"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            onClick={() => (window.location.href = "#projects")}
            className="hover:cursor-pointer"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            onClick={() => (window.location.href = "#contact")}
            className="hover:cursor-pointer"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
