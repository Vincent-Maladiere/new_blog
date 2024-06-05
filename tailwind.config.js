/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F8F8",
        lightPurple: "#E2E0FF",
      },
    },
  },
  plugins: [],
};
