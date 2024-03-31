import { Concept, HeroImage } from "@/lib/microcms";
import Image from "next/image";

/**
 * コンセプトページのアイテムを返す
 */
export const ConceptItem = ({ image, heading, description, alt }: Concept) => {
  return (
    <div className="relative flex h-screen flex-col">
      <Image
        src={image.url + "?w=2000"}
        width={2000}
        height={image.height}
        style={{
          height: "70%",
          objectFit: "cover",
        }}
        alt={alt}
      />
      <div className="p-4 pt-6">
        <h2 className="p-4 text-2xl text-black">{heading}</h2>
        <p className="bg-white/70 p-4 text-base text-black">{description}</p>
      </div>
    </div>
  );
};
