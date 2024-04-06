import { Inter, Noto_Serif_JP } from "next/font/google";

/**
 * 全体で使用するフォントの定義ファイル
 */
export const notoSerifJp = Noto_Serif_JP({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-notoSerifJp",
});
