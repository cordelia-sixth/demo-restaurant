import { getGalleryImage } from "@/lib/microcms";
import { notFound } from "next/navigation";
import { GalleryItem } from "./_components/GalleryItem";

/**
 * ギャラリーページ
 * /gallery
 */
const Page = async () => {
  const gallery = await getGalleryImage();
  if (!gallery) return notFound();

  return (
    <>
      {gallery.contents.map((item) => {
        return <GalleryItem key={item.id} {...item} />;
      })}
    </>
  );
};

export default Page;
