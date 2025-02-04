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
        brand: "#ff561d", //"#F28705", // || "#024959" || "#702DE3",
        transparent: "transparent",
      },
      boxShadow: {
        customShadow: "0px 5px 30px #ff51009c"
      }
    },
  },
  plugins: [],
} satisfies Config;
