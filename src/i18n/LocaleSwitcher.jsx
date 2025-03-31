import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { supportedLngs } from "./config";
import { Globe } from "lucide-react";
import IconButton from "../components/General/IconButton";

export default function LocaleSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <IconButton
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-900 hover:bg-gray-700"
      >
        <div className="flex items-center gap-2">
          <Globe className="dark:invert" />
          <span className="body2 font-medium text-gray-50 uppercase">
            {i18n.resolvedLanguage}
          </span>
        </div>
      </IconButton>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-28 rounded-lg bg-gray-900 p-2 shadow-lg">
          {Object.entries(supportedLngs).map(([code, name]) => (
            <button
              key={code}
              onClick={() => changeLanguage(code)}
              className={`body2 w-full rounded px-2 py-1.5 text-left ${
                i18n.resolvedLanguage === code
                  ? "body2 bg-gray-700 text-gray-50"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
