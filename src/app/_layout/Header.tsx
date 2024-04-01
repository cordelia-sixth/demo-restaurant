import Link from "next/link";
import { HeaderMenu } from "./HeaderMenu";

/**
 * ヘッダーコンポーネント
 */
export const Header = () => {
  return (
    <header>
      <div className="relative m-auto sm:max-w-[800px]">
        <Link
          href="/"
          className="absolute left-4 top-4 z-[1] text-2xl font-bold"
        >
          SUGOI Restaurant
        </Link>
        <HeaderMenu />
      </div>
    </header>
  );
};
