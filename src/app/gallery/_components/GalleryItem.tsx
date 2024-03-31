import { HeroImage } from "@/lib/microcms";
import Image from "next/image";

export const GalleryItem = ({ image, alt }: HeroImage) => {
  return (
    <div className="flex flex-col">
      <Image
        src={image.url + "?w=2000"}
        width={2000}
        height={image.height}
        style={{
          height: "40vh",
          objectFit: "cover",
        }}
        alt={alt}
      />
    </div>
  );
};
