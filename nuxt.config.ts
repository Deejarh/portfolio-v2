// https://nuxt.com/docs/api/configuration/nuxt-config
const appDescription = "Badmus Damola Taiwo is a highly proficient frontend developer with over three years of invaluable experience in the fintech/credit Industry, consistently delivering exceptional user experiences for a range of web applications"

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
    },
  },
  app: {
     head: {
       title: "Badmus Damola Taiwo",
       meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
      { hid: "description", name: "description", content: appDescription },
      { hid: "og:title", property: "og:title", content: "Badmus Damola Taiwo" },
      {
        hid: "og:description",
        property: "og:description",
        content: appDescription,
      },
      { hid: "og:type", property: "og:type", content: "Badmus Damola Taiwo portfolio" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://badmus-damola-taiwo.netlify.app/",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
    format: ["webp"],
    quality: 100,
  },
})
