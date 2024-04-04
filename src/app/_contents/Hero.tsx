import { getHeroImageList } from "@/lib/microcms";
import { HeroImage } from "../_layout/HeroImage";

/**
 * トップページのヒーローコンテンツ
 */
export const Hero = async () => {
  const Imagelist = await getHeroImageList();

  return (
    <section className="relative z-0 h-screen w-full">
      {/* TODO: もっといいやりかたある？ */}
      {Imagelist.contents.map((item, index) => {
        return <HeroImage key={item.id} delay={index} {...item} />;
      })}
    </section>
  );
};
