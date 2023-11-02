import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

/* en_EN */
import en_tr from "./translation/en_tr.json";
import en_en from "./translation/en_en.json";

const resources = {
  en: {
    translation: en_en,
  },
  tr: {
    translation: en_tr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en", // Default language
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
