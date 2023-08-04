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
        popover: "#F1F1F1",
        accent: "#808080",
        dark: "#3C4048",
      },
      fontFamily: {
        primary: ["EB Garamond", "serif"],
        secondary: ["Rufina", "serif"],
      },
    },
  },
  plugins: [],
};
