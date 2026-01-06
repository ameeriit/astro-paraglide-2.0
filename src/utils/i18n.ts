import { setLocale } from "../paraglide/runtime";

export function setupLanguageTagHandler() {
  if (!import.meta.env.SSR) {
    const htmlLang = document.documentElement.lang;
    if (htmlLang === "en" || htmlLang === "de") {
      setLocale(htmlLang, { reload: false });
    }
  }
}
