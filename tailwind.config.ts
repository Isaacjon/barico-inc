import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brand: ["var(--font-brand)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        white: "#fff",
        grey: {
          400: "#ccc",
          500: "#AAAAAA",
          600: "#888888",
        },
        black: "#000",
        dark: "#333",
        brand: "#082363",
        brandLight: "#1b68f7",
        transparent: "transparent",
        'semi-transparent-white': 'rgba(255, 255, 255, 0.11)',
        'semi-transparent-black': 'rgba(0, 0, 0, 0.51)',
      },
      boxShadow: {
        customShadow: "0px 5px 30px #5474b040"
      }
    },
  },
  plugins: [],
} satisfies Config;
