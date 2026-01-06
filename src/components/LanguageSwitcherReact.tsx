import { useEffect, useRef, useState } from "react";
import { locales } from "../paraglide/runtime";

const localeNames: Record<string, string> = {
  en: "English",
  de: "Deutsch",
};

function getPathWithoutLocale(pathname: string, locales: string[]): string {
  const localePattern = new RegExp(`^/(${locales.join("|")})(/|$)`);
  const match = pathname.match(localePattern);
  let pathWithoutLocale = pathname;
  if (match) {
    pathWithoutLocale = pathname.replace(localePattern, "/");
  }
  if (pathWithoutLocale === "") pathWithoutLocale = "/";
  return pathWithoutLocale;
}

export default function LanguageSwitcherReact({ pathname }: { pathname: string }) {
  const localePattern = new RegExp(`^/(${[...locales].join("|")})(/|$)`);
  const match = pathname.match(localePattern);
  const currentLang = match ? match[1] : locales[0];

  const availableLocales = locales.map((code) => ({
    code,
    name: localeNames[code] || code,
    path: `/${code}`,
  }));

  const pathWithoutLocale = getPathWithoutLocale(pathname, [...locales]);
  const currentLocale = availableLocales.find((l) => l.code === currentLang);

  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!selectRef.current) return;
      const trigger = selectRef.current.querySelector("[data-trigger]");
      if (trigger && trigger.contains(e.target as Node)) {
        setOpen((prev) => {
          if (!prev) trigger.setAttribute("aria-expanded", "true");
          else trigger.setAttribute("aria-expanded", "false");
          return !prev;
        });
        return;
      }
      if (!selectRef.current.contains(e.target as Node)) {
        setOpen(false);
        if (trigger) trigger.setAttribute("aria-expanded", "false");
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      className={`language-select${open ? " open" : ""}`}
      data-lang-select
      ref={selectRef}
    >
      <span className="label">React Component</span>
      <div className="select">
        <button
          className="select-trigger"
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          data-trigger
        >
          {currentLocale?.name}
          <span className="arrow">▾</span>
        </button>
        <ul className="select-menu" role="listbox" data-menu>
          {availableLocales.map((locale) => (
            <li key={locale.code}>
              <a
                href={
                  locale.path === "/"
                    ? pathWithoutLocale
                    : locale.path + pathWithoutLocale
                }
                className={`select-option${currentLang === locale.code ? " active" : ""}`}
                aria-current={currentLang === locale.code ? "true" : undefined}
              >
                {locale.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        .language-select {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          font-family: system-ui, sans-serif;
        }
        .label {
          display: block;
          font-size: 0.75rem;
          color: #6b7280;
          margin-bottom: 0.25rem;
        }
        .select {
          position: relative;
          width: 160px;
        }
        .select-trigger {
          width: 100%;
          padding: 0.6rem 0.75rem;
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-weight: 500;
          color: #374151;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
        .select-trigger:hover {
          border-color: #9333ea;
        }
        .arrow {
          font-size: 0.75rem;
          transition: transform 0.2s ease;
        }
        .language-select.open .arrow {
          transform: rotate(180deg);
        }
        .select-menu {
          position: absolute;
          top: calc(100% + 0.25rem);
          left: 0;
          width: 100%;
          background: white;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          padding: 0.25rem;
          list-style: none;
          opacity: 0;
          transform: translateY(-6px);
          pointer-events: none;
          transition: all 0.15s ease;
        }
        .language-select.open .select-menu {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .select-option {
          display: block;
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          text-decoration: none;
          color: #374151;
          font-size: 0.875rem;
        }
        .select-option:hover {
          background: #f3e8ff;
          color: #9333ea;
        }
        .select-option.active {
          background: #9333ea;
          color: white;
          font-weight: 600;
        }
          .label{
          color: white}
      `}</style>
    </div>
  );
}
