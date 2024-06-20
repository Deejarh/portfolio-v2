/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class',
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
        overlock: ["Overlock", "sans-serif"],
        passion: ["Passion One", "sans-serif"],
        oxygen: ["Oxygen", "sans-serif"],
        spirax: ["Spirax", "system-ui"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      extend: {
        colors: {
        "header": "#FA7788",
        "primary": "#FFC1C9",
        "purple": "#CB98D8",
        "purple-2": "#B480B4",
        "purple-3": "#8368BD1A",
        "purple-4": "#7B4AE2",
        "gray-1": "#55566F",
        "gray-2": "#787878",
        "gray-3": "#4C4C4C",
        "gray-4": "#CBCBCC",
        "gray-5": "#C2C7C6",
        "gray": "#F7F6F7",
        "black-3": " #2C2D3F",
        "black-2": "#1E1E28",
        "black-1": "#9F9DA3",
        "text-black-2": "#EDEAF1",
        "white-1": "#FFF4F4",
        "black": "#090E16",

      }

       
      },
    },
    plugins: [],
  };
  