import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { enUS, ar } from "date-fns/locale"; //
import { format as formatDate, isDate } from "date-fns";

const locales = { enUS, ar };

i18next
  .use(HttpApi)
  .use(LanguageDetector)

  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    debug: true,
    // Options for language detector
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    // react: { useSuspense: false },
    react: {
      wait: true,
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        if (isDate(value)) {
          const locale = locales[lng];
          if (format === "short") return formatDate(value, "P", { locale });
          if (format === "long")
            return formatDate(value, "PPPP h.m.a", { locale });
          if (format === "long2") return formatDate(value, "PPP", { locale });
          if (format === "time") return formatDate(value, "h.m.a", { locale });
          return formatDate(value, format, { locale });
        }
        return value;
      },
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });
