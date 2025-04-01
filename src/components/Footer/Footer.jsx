import { Copyright } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-default w-full py-6">
      <div className="flex items-center justify-center gap-1">
        <p className="body3 flex items-center">
          <Copyright className="mr-1 inline-block h-4 w-4" />
          {new Date().getFullYear()} | {t("footer_text")}
        </p>
      </div>
    </footer>
  );
}
