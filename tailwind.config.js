/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Dark: {
          100: "#1F1F1F",
          200: "#333333",
          300: "#EAEAEA",
          400: "#444444",
          500: "#AAAAAA",
          headTheme: "#000000",
          theme: "#151515",
        },
        Light : {
          100 : '#FAFAFA',
        }
      },
      fontSize: {
        "7.5xl": "5.5rem",
        "6.5xl": "4.5rem",
      },
      letterSpacing: {
        tightest: "-0.075em",
      },
      lineHeight: {
        "extra-loose": "5.5rem",
        "2x-loose": "6rem",
        loose: "4.5rem",
        "slightly-loose": "3.5rem",
      },
      screens: {
        tall: { raw: "(min-height: 780px)" },
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
