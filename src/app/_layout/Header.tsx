"use client";

import Image from "next/image";

/**
 * ヘッダーコンポーネント
 */
export const Header = () => {
  return (
    <header className="flex h-screen flex-col bg-slate-300">
      {/* モバイル用 */}
      <div className="z-[1] flex justify-between p-4">
        <h1>SUGOI</h1>
        <button onClick={() => console.log("hi")}>menu</button>
      </div>

      <Image
        src="https://via.placeholder.com/500x500?text=hero"
        fill={true}
        alt="ヘッダー画像"
      />

      {/* PC用 */}
      <div className="hidden">PC</div>
    </header>
  );
};
