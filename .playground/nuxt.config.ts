import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  compatibilityDate: "2025-03-02",
  extends: ["..", "github:LibreDash/core"],
  modules: ["@nuxt/eslint"],
  eslint: {
    config: {
      rootDir: fileURLToPath(new URL("..", import.meta.url)),
    },
  },
});
