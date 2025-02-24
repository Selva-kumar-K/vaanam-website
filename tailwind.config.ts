import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
    backgroundImage: {
      "hero-bg-img": "url('/hero-bg-img.jpg')",
      "footer-bg-img": "url('/world map vector.jpg')",
    },
  },
  plugins: [],
} satisfies Config;
