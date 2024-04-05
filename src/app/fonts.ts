import { Inter, Noto_Serif_JP } from "next/font/google";

/**
 * 全体で使用するフォントの定義ファイル
 */

// 英語
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// 日本語
export const notoSerifJp = Noto_Serif_JP({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-notoSerifJp",
});
