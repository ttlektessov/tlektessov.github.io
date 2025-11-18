import Header from "./components/Header/Header";
import Profile from "./components/Hero/Profile";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import { DarkModeProvider } from "./components/context/DarkModeContext";
import { ReactLenis } from "lenis/react";

function App() {
  return (
    <>
      <ReactLenis root>
        <DarkModeProvider>
          <Header />
          <main>
            <Profile />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </DarkModeProvider>
      </ReactLenis>
    </>
  );
}

export default App;
