// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolveSync } from "mlly";

const path = resolveSync("@indoorequal/vue-maplibre-gl", {
  url: import.meta.url,
});
const test = path.replace("file:///", "");
console.log(test);

export default defineNuxtConfig({
  extends: [["github:LibreDash/core", { install: true }]],
  future: { compatibilityVersion: 4 },
  nitro: {
    experimental: {
      websocket: true,
    },
  },
  modules: ["nuxt-maplibre", "@tresjs/nuxt"],
  vite: {
    optimizeDeps: {
      // exclude: ["@indoorequal/vue-maplibre-gl"],
      // include: [
      //   resolveSync("@indoorequal/vue-maplibre-gl", {
      //     url: import.meta.url,
      //   }).replace("file:///", ""),
      // ],
      include: ["@indoorequal/vue-maplibre-gl"],
    },
  },
});
