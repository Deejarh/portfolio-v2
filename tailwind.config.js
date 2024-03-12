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
        mulish: ["Mulish", "sans-serif"],
        "jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
        overlock: ["Overlock", "sans-serif"],
        passion: ["Passion One", "sans-serif"],
        oxygen: ["Oxygen", "sans-serif"],
        spirax: ["Spirax", "system-ui"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      extend: {
        colors: {
        "header": "#FB7788",
        "primary": "#FFC1C9",
        "purple": "#CB98D8",
        "purple-2": "#B480B4",
        "purple-3": "#8368BD1A",
        "gray-1": "#55566F",
        "gray-2": "#787878",
        "gray-3": "#4C4C4C",
        "black-1": " #2C2D3F",
        "black-2": "#1E1E28",


      }

       
      },
    },
    plugins: [],
  };
  