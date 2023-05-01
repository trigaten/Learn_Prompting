/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    // this prevents tailwind from editing styles in the docs (https://stackoverflow.com/questions/75067324/docusaurus-and-tailwind-css)
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vietnam: ["Be Vietnam Pro", "sans-serif"],
      },
      colors: {
        default: "#4F536A",
        "dark/500": "#00082B",
        "gray/600": "#979AAC",
        "gray/500": "#E3E4EC",
        "gray/400": "#4F536A",
        "gray/300": "#F8F8FA",
        "gray/200": "#A7A9B5",
        "green/400": "#0FB8A3",
        "green/300": "#01695D",
      },
    },
  },
  plugins: [],
};
