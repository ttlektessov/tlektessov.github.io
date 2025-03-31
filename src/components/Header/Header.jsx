// src/components/Header/Header.jsx
import { useDarkMode } from "../context/DarkModeContext";
import useScroll from "../Hooks/use-scroll";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const { darkMode } = useDarkMode();
  const scrolled = useScroll();

  return (
    <header
      className={
        darkMode +
        " " +
        (scrolled
          ? "bg-gray/50 sticky top-0 z-30 w-full border-b border-transparent backdrop-blur-xl max-md:border-gray-100 md:border-gray-100"
          : "bg-gray-default sticky top-0 z-30 w-full border-b border-transparent max-md:border-gray-100")
      }
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
        <Logo />
        <DesktopMenu />
        <MobileMenu />
      </div>
    </header>
  );
}
