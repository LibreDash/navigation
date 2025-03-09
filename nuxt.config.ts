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
      include: ["maplibre-gl", "three"],
    },
  },
});
