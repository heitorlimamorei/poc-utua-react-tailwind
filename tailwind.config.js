/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "background-primary": "#FFF",
        "background-secundary": "#F2F4F7",
        "button-bg-primary": "#D03801",
      },
      borderColor: {
        "border-primary": "#D0D5DD",
        "border-secondary": "#EAECF0",
      },
      textColor: {
        "tertiary-600": "#475467",
        "quartenary-500": "#667085",
        "text-primary-900": "#101828",
        "text-secundary-700": "#344054",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

