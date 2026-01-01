import { getLocale } from '../paraglide/runtime';

/**
 * Localizes the route based on the current language.
 */
const loc = (route: string) => {
  return `/${getLocale()}${route}`;
};

/**
 * Returns routes localized to the current language.
 * Call this function to get routes with the active locale.
 */
const getRoutes = () => ({
  home: loc(''),
  about: loc('/about'),
  contact: loc('/contact'),
});

export default getRoutes;