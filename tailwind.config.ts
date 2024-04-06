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
      /** フォント */
      fontFamily: {
        // 英語用
        // inter: ["var(--font-inter)"],
        // 日本語用
        notoJp: ["var(--font-notoSerifJp)"],
      },
      // カスタムアニメーション
      keyframes: {
        anim: {
          "0%": { opacity: "0" },
          "10%": { opacity: "1" },
          "25%": { opacity: "1" },
          "30%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        anim: "anim 25s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
