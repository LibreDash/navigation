// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolveSync } from "mlly";
console.log(
  resolveSync("@indoorequal/vue-maplibre-gl", { url: import.meta.url }),
);

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
      include: [
        resolveSync("@indoorequal/vue-maplibre-gl", { url: import.meta.url }),
      ],
    },
  },
});
