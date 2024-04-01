import { getGalleryImage, getImages } from "@/lib/microcms";
import { notFound } from "next/navigation";
import { GalleryItem } from "./_components/GalleryItem";

/**
 * ギャラリーページ
 * /gallery
 */
const Page = async () => {
  const gallery = await getImages("gallery", "gallery");
  if (!gallery) return notFound();

  return (
    <div className="m-auto sm:grid sm:grid-cols-2 sm:pt-24">
      {gallery.contents.map((item) => {
        return <GalleryItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Page;
