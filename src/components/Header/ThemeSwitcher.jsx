import { MoonStar, Sun } from "lucide-react";
import IconButton from "../General/IconButton";
import { useDarkMode } from "../context/DarkModeContext";

export default function ThemeSwitcher() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <IconButton onClick={toggleDarkMode}>
      {darkMode === "dark" ? <Sun color="#ffffff" /> : <MoonStar />}
    </IconButton>
  );
}
