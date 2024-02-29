/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
   
    ],
    theme: {
      fontFamily: {
        gilroy: ["Gilroy"],
        "gilroy-light": ["Gilroy-Light"],
        mulish: ["Mulish", "sans-serif"],
        "jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
      },
      extend: {
     

       
      },
    },
    plugins: [],
  };
  