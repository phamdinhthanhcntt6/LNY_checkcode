import type { Config } from "tailwindcss";

const config: Config = {
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
      boxShadow: {
        "inset-red": "inset 0 0 0 1px #FD5B3A",
        "inset-black": "inset 0 0 0 1px #111111",
        "custom-shadow": "6px 6px 0px 0px #111111",
      },
    },
  },
  plugins: [],
};
export default config;
