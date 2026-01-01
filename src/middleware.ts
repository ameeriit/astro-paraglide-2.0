import { defineMiddleware } from 'astro:middleware';
import { paraglideMiddleware } from './paraglide/server';

export const onRequest = defineMiddleware((context, next) => {
  return paraglideMiddleware(context.request, () => next());
});