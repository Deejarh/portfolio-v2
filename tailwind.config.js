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
        colors: {
        "header": "#FB7788",
        "primary": "#FFC1C9",
        "purple": "#CB98D8",
        "purple-2": "#B480B4",
        "gray-1": "#55566F",
        "black-1": " #2C2D3F",
        "black-2": "#1E1E28",

      }

       
      },
    },
    plugins: [],
  };
  