import React from "react";
import { useState, useEffect } from "react";
import useScroll from "../Hooks/use-scroll";
import useWindowSize from "../Hooks/use-windows-size";
import { MoonStar, Sun, Menu, X } from "lucide-react";
import { documents } from "../../assets";
import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
} from "../General/Drawer";
import IconButton from "../General/IconButton";
import Button from "../General/Button";

export default function Header({ darkMode, toggleDarkMode }) {
  const scrolled = useScroll();
  const size = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (size?.width && size?.width > 767 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);

  const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={
        darkMode +
        " " +
        (scrolled
          ? "sticky top-0 z-30 w-full border-b border-transparent bg-gray-50 backdrop-blur-xl max-md:border-gray-100 md:border-gray-100"
          : "bg-gray-default sticky top-0 z-30 w-full border-b border-transparent max-md:border-gray-100")
      }
    >
      <div className="bg-gray-default mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
        <div className="h3">{"<TT />"}</div>
        {/* desktop menu */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex list-none items-center gap-6">
            {NAV_LINKS.map((link, index) => (
              <li key={index}>
                <a
                  onClick={() => (window.location.href = link.href)}
                  className="body2 hover:cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-6 w-0.5 bg-gray-100"></div>
          <div className="flex items-center gap-4">
            <IconButton onClick={toggleDarkMode}>
              {darkMode === "dark" ? <Sun color="#ffffff" /> : <MoonStar />}
            </IconButton>
            <Button
              className="w-full" // Additional classes
              onClick={() => window.open(documents.resume)}
            >
              Download CV
            </Button>
            {/* <button
              className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800"
              onClick={() => window.open(documents.resume)}
            >
              Download CV
            </button> */}
          </div>
        </div>

        {/* mobile menu */}
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild className="flex md:hidden">
            <IconButton>
              <Menu className="h-6 w-6 text-gray-600" />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
            <div className="flex items-center justify-between border-b border-gray-100 p-4">
              <div className="h3">{"<TT />"}</div>
              <DrawerClose asChild>
                <IconButton>
                  <X className="h-6 w-6 text-gray-600" />
                </IconButton>
              </DrawerClose>
            </div>
            <div className="border-b border-gray-100 p-4">
              <ul className="flex list-none flex-col gap-4">
                {NAV_LINKS.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={() => {
                        const timeoutId = setTimeout(() => {
                          setIsOpen(false);
                          clearTimeout(timeoutId);
                        }, 500);
                      }}
                      className="body2 block hover:cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 p-4">
              <div className="flex items-center justify-between">
                <p className="body2">Switch Theme</p>
                <IconButton onClick={toggleDarkMode}>
                  {darkMode === "dark" ? <Sun color="#ffffff" /> : <MoonStar />}
                </IconButton>
              </div>
              <button
                className="inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800"
                onClick={() => window.open(documents.resume)}
              >
                Download CV
              </button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
