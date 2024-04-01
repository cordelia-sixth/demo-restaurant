import Link from "next/link";
import { HeaderMenu } from "./HeaderMenu";

/**
 * ヘッダーコンポーネント
 */
export const Header = () => {
  return (
    <header className="relative w-full bg-slate-300">
      <div className="absolute left-0 top-0 z-[1] flex w-full items-center justify-between p-4">
        <Link href="/" className="p-1 text-2xl font-bold">
          SUGOI Restaurant
        </Link>
        <HeaderMenu />
      </div>
    </header>
  );
};
