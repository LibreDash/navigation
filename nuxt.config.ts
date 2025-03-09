// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  nitro: {
    experimental: {
      websocket: true,
    },
  },
  modules: ["nuxt-maplibre", "@tresjs/nuxt"],
  vite: {
    optimizeDeps: {
      include: ["@indoorequal/vue-maplibre-gl", "@tresjs/cientos"],
    },
  },
});
