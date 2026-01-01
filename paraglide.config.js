/**
 * @type {import("@inlang/paraglide-js").UserConfig}
 */
export default {
  project: "./project.inlang",
  outdir: "./src/paraglide",
  strategy: ["url"],
  urlPattern: {
    en: "/en/:path*",
    de: "/de/:path*"
  }
};
