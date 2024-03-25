import { Concept } from "../_contents/Concept";
import { Gallery } from "../_contents/Gallery";
import { Infomation } from "../_contents/Infomation";
import { Menu } from "../_contents/Menu";

/**
 * メインコンポーネント
 */
export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-full flex-1 flex-col">
      <Gallery />
      <Concept />
      <Menu />
      <Infomation />
    </main>
  );
};
