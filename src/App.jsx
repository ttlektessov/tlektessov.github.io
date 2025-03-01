import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useWindowSize from "./useWindowSize";
function App() {
  const { width } = useWindowSize();
  if (width <= 600) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-center text-xl">
          In development, check the portfolio from PC <br /> TBU 02.03.2025
        </p>
      </div>
    );
  } else {
    return (
      <>
        <Navbar />
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
