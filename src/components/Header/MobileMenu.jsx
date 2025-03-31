import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
} from "../General/Drawer";
import IconButton from "../General/IconButton";
import NavigationLinks from "./NavigationLinks";
import ThemeSwitcher from "./ThemeSwitcher";
import DownloadCV from "./DownloadCV";
import Logo from "./Logo";
import { useTranslation } from "react-i18next";
import LocaleSwitcher from "../../i18n/LocaleSwitcher";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild className="flex md:hidden">
        <IconButton>
          <Menu className="h-6 w-6 text-gray-600" />
        </IconButton>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
        <div className="flex items-center justify-between border-b border-gray-100 p-4">
          <Logo />
          <DrawerClose asChild>
            <IconButton>
              <X className="h-6 w-6 text-gray-600" />
            </IconButton>
          </DrawerClose>
        </div>
        <div className="border-b border-gray-100 p-4">
          <NavigationLinks
            isMobile={true}
            onLinkClick={() => setIsOpen(false)}
          />
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-center justify-between">
            <p className="body2">{t("switch_theme")}</p>
            <ThemeSwitcher />
          </div>
          <DownloadCV className="w-full" />
          <div className="align-end flex justify-end">
            <LocaleSwitcher />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
