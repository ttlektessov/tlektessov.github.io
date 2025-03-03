import React from "react";
import Header from "./components/Header/Header";
import Profile from "./components/Hero/Profile";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
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
        <Header />
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
