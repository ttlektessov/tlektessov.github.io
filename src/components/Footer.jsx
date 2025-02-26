import React from "react";

export default function Footer() {
  return (
    <footer className="h-26vh m-4">
      <nav>
        <ul className="flex justify-center space-x-8">
          <li>
            <a href="#about" className="text-black hover:text-gray-500">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="text-black hover:text-gray-500">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="text-black hover:text-gray-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-black hover:text-gray-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <p className="text-center">
        Copyright &#169; 2025 Temirlan Tlektessov. All Rights Reserved.
      </p>
    </footer>
  );
}
