/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#438E93",
        secondary: "#1B6273",
        popover: "#ddedee",
        accent: "#808080",
        dark: "#050505",
      },
      fontFamily: {
        primary: ["EB Garamond", "serif"],
        secondary: ["Libre Caslon Text", "serif"],
      },
    },
  },
  plugins: [],
};
