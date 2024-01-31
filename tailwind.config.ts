import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    colors: {
      navigation: "hsla(0, 0%, 100%, 1)",
      card: "hsla(215, 72%, 93%, 1)",
      flippaBlue: "hsla(222, 100%, 52%, 1)",
      headingText: "hsla(0, 0%, 0%, 1)",
      subtitleText: "hsla(0, 0%, 51%, 1)",
    },
    spacing: {
      "600": "37.5rem"
    }
    },
  },
  plugins: [],
};
export default config;
