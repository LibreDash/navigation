// https://nuxt.com/docs/api/configuration/nuxt-config
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
      // exclude: ["nuxt-maplibre"],
      // include: ["nuxt-maplibre > @indoorequal/vue-maplibre-gl", "three"],
      include: ["@indoorequal/vue-maplibre-gl"],
    },
  },
});
