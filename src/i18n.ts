import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import ar from "./locales/ar.json";
import en from "./locales/en.json";

if (!i18n.isInitialized) {
  void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        ar: { translation: ar },
      },
      fallbackLng: "en",
      supportedLngs: ["en", "ar"],
      load: "languageOnly",
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ["localStorage", "htmlTag", "navigator"],
        caches: ["localStorage"],
      },
    });
}

export default i18n;
