export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss"],
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/eslint"],
  compatibilityDate: "2025-07-15",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          //   additionalData: '@use "@/assets/scss/variables" as *;',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      API: process.env.API || "XXXXXXXXXXXX",
    },
  },
});
