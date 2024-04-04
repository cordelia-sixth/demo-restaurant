import { HeroImage } from "@/lib/microcms";
import Image from "next/image";

/**
 * ギャラリーの個別画像を返すコンポーネント
 */
export const GalleryItem = ({ image, alt }: HeroImage) => {
  return (
    <div className="flex h-[40vh] flex-col sm:h-[70vh]">
      <Image
        src={image.url + "?w=2000"}
        width={2000}
        height={image.height}
        style={{
          height: "100%",
          objectFit: "cover",
        }}
        alt={alt}
      />
    </div>
  );
};
