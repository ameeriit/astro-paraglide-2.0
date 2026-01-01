import { defineMiddleware } from 'astro:middleware';
import { setLocale } from './paraglide/runtime';

export const onRequest = defineMiddleware(async (context, next) => {
  // Redirect root to /en
  if (context.url.pathname === '/') {
    return Response.redirect(new URL('/en', context.url.origin), 307);
  }

  // Extract locale from URL path
  const pathSegments = context.url.pathname.split('/').filter(Boolean);
  const locale = pathSegments[0]; // 'en' or 'de'

  // Set the locale before rendering (disable reload)
  if (locale === 'en' || locale === 'de') {
    setLocale(locale as 'en' | 'de', { reload: false });
  }

  return next();
});