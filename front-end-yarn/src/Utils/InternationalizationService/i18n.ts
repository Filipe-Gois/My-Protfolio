import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../../Locales/En/translation.json";
import translationPT from "../../Locales/Pt/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      ...translationEN,
    },
    pt: {
      ...translationPT,
    },
  },
  lng: "pt", // idioma padrão
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
