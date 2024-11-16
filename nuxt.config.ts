// https://nuxt.com/docs/api/configuration/nuxt-config
const appDescription = "Badmus Damola Taiwo is a highly proficient software engineer with over four years of invaluable experience in the fintech/credit Industry, consistently delivering exceptional user experiences for a range of web applications"

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
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://damola-badmus-taiwo.vercel.app/",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'preconnect', href: "https://fonts.googleapis.com", crossorigin: "anonymous" },
      { rel: 'preconnect', href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
      { rel: 'preload', as: 'style', href: "https://fonts.googleapis.com/css2?family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Oxygen:wght@300;400;700&family=Passion+One:wght@400;700;900&family=Spirax&display=swap" },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Oxygen:wght@300;400;700&family=Passion+One:wght@400;700;900&family=Spirax&display=swap", media: 'print', onload: "this.media='all'" }
    ],
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
  },
  modules: [
    "@nuxt/image",
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
  ],
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    classSuffix: '',
  },
  image: {
    format: ["webp"],
    quality: 100,
  },
})
