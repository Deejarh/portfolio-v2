// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      APP_BASE_URL: process.env.APP_BASE_URL,
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  pages: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devServer: {
    port: 3000, // default: 3000
    host: "0.0.0.0", // default: localhost
  },
  build: {
    transpile: ["gsap"],
  },
  modules: [
    "@nuxt/image",
    '@vueuse/nuxt',
  ],
  image: {
    provider: 'static',
    format: ["jpeg","png","webp"],
    quality: 100,
  },
})
