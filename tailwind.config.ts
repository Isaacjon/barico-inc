import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        brand: "#F28705", // || "#024959" || "#702DE3",
        transparent: "transparent",
      },
    },
  },
  plugins: [],
} satisfies Config;
