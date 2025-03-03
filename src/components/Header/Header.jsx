import React from "react";
import { useState, useEffect } from "react";
import useScroll from "../Hooks/use-scroll";
import useWindowSize from "../Hooks/use-windows-size";

export default function Header() {
  const scrolled = useScroll(40);
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();

  // close sidebar if open in screen size < 768px
  useEffect(() => {
    if (size?.width && size?.width > 767 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);
  return (
    <header
      className={
        scrolled
          ? "bg-gray/50 backdrop-blur-xl md:border-gray-100"
          : "bg-gray sticky top-0 z-30 w-full border-b border-transparent max-md:border-gray-100"
      }
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
        <div className="text-4xl font-normal">
          {"<TT />"}
          <span className="text-xs">TBU 02.03.2025</span>
        </div>

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
      </div>
    </header>
  );
}
