import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export const supportedLngs = {
  en: "English",
  kz: "Kazakh",
  kr: "Korean",
  ru: "Russian",
};
i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    supportedLngs: Object.keys(supportedLngs),
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "./locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
