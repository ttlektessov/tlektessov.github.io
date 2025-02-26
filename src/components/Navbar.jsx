import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-around items-center p-4 bg-white shadow-md h-[17vh]">
      <div className="text-4xl font-normal">Temirlan Tlektessov</div>
      <ul className="flex gap-[2rem] text-2xl font-normal">
        <li>
          <Link to="#about">About</Link>
        </li>
        <li>
          <Link to="#experience">Experience</Link>
        </li>
        <li>
          <Link to="#projects">Projects</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
