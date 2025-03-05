import React from "react";
import Header from "./components/Header/Header";
import Profile from "./components/Hero/Profile";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import useWindowSize from "./useWindowSize";
import { useState, useEffect } from "react";
import ConstructionContainer from "./components/General/ConstructionContainer";
import Skills from "./components/Skills/Skills";

function App() {
  const [darkMode, setDarkMode] = useState("dark");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode === "dark");
  }, []);
  function toggleDarkMode() {
    const newMode = darkMode === "dark" ? "light" : "dark";
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode === "dark");
  }
  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Profile />
      <About />
      <Skills darkMode={darkMode} />
      <Experience />
      <ConstructionContainer />
      {/*
      <Projects />
       */}
      <Contact darkMode={darkMode} />
      <Footer />
    </>
  );
}

export default App;
