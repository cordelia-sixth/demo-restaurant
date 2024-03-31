import { Gallery } from "./_contents/Gallery";
import { Concept } from "./_contents/Concept";
import { Menu } from "./_contents/Menu";
import { Infomation } from "./_contents/Infomation";
import { Hero } from "./_contents/Hero";

/**
 * トップページ
 */
const Page = () => {
  // const data = await getHeaderimg();
  // console.log(data);

  return (
    <>
      <Hero />
      <Concept />
      <Gallery />
      <Menu />
      <Infomation />
    </>
  );
};

export default Page;
