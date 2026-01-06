import { defineMiddleware } from 'astro:middleware';
import { locales, setLocale } from './paraglide/runtime';

type Locale = (typeof locales)[number];

export const onRequest = defineMiddleware(async (context, next) => {
  // Redirect root to /en
  if (context.url.pathname === "/") {
    return Response.redirect(new URL("/en", context.url.origin), 307);
  }

  // Extract locale from URL path
  const pathSegments = context.url.pathname.split("/").filter(Boolean);
  const locale = pathSegments[0];

  // Set the locale before rendering (disable reload)
  if (locales.includes(locale as Locale)) {
    setLocale(locale as Locale, { reload: false });
  }

  return next();
});