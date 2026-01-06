import { locales, setLocale } from "../paraglide/runtime";

type Locale = (typeof locales)[number];

export function setupLanguageTagHandler() {
  if (!import.meta.env.SSR) {
    const htmlLang = document.documentElement.lang;
    if (locales.includes(htmlLang as Locale)) {
      setLocale(htmlLang as Locale, { reload: false });
    }
  }
}
