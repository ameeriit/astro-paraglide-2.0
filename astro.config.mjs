// @ts-check
import node from "@astrojs/node";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
          plugins: [
              paraglideVitePlugin({
                  project: "./project.inlang",
                  outdir: "./src/paraglide",
              }),
          ],
      },

  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [react()],
});