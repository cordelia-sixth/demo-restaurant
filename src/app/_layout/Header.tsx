import { getHeaderimg } from "@/lib/microcms";
import { HeaderImg } from "./HeaderImg";
import { HeaderMenu } from "./HeaderMenu";

/**
 * ヘッダーコンポーネント
 */
export const Header = async () => {
  const { contents } = await getHeaderimg();

  return (
    <header className="relative h-screen w-full bg-slate-300">
      <div className="absolute left-0 top-0 z-[1] flex w-full items-center justify-between p-4">
        <h1 className="bg-slate-500/[.7] p-2 py-3">SUGOI Restran</h1>
        <HeaderMenu />
      </div>
      <div className="relative z-0 h-screen w-full">
        {/* TODO: もっといいやりかたある？ */}
        {contents.map((item, index) => {
          return <HeaderImg key={item.id} id={index} {...item.image} />;
        })}
      </div>
    </header>
  );
};
