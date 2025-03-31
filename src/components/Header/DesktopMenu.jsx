import NavigationLinks from "./NavigationLinks";
import ThemeSwitcher from "./ThemeSwitcher";
import DownloadCV from "./DownloadCV";
import LocaleSwitcher from "../../i18n/LocaleSwitcher";
export default function DesktopMenu() {
  return (
    <div className="hidden items-center gap-6 md:flex">
      <NavigationLinks />
      <div className="h-6 w-0.5 bg-gray-100"></div>
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <LocaleSwitcher />
        <DownloadCV className="w-full" />
      </div>
    </div>
  );
}
