import { HeaderMenu } from "./HeaderMenu";

/**
 * ヘッダーコンポーネント
 */
export const Header = () => {
  return (
    <header className="relative w-full bg-slate-300">
      <div className="absolute left-0 top-0 z-[1] flex w-full items-center justify-between p-4">
        <h1 className="bg-slate-500/[.7] p-2 py-3">SUGOI Restran</h1>
        <HeaderMenu />
      </div>
    </header>
  );
};
