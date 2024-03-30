import { getHeaderimg } from "@/lib/microcms";
import { Gallery } from "./_contents/Gallery";
import { Concept } from "./_contents/Concept";
import { Menu } from "./_contents/Menu";
import { Infomation } from "./_contents/Infomation";

/**
 * トップページ
 */
export default async function Page() {
  // const data = await getHeaderimg();
  // console.log(data);

  return (
    <>
      <Gallery />
      <Concept />
      <Menu />
      <Infomation />
    </>
  );
}
