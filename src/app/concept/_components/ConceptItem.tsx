import { Concept } from "@/lib/microcms";
import Image from "next/image";

/**
 * コンセプトページのアイテムを返す
 */
export const ConceptItem = ({ image, heading, description, alt }: Concept) => {
  return (
    // TODO: スタイル修正とコンポーネント切り出し
    <div className="relative flex h-screen flex-col sm:h-auto sm:flex-row sm:px-96 sm:py-20">
      <Image
        src={image.url + "?w=2000"}
        width={2000}
        height={image.height}
        style={{
          height: "100%",
          objectFit: "cover",
        }}
        alt={alt}
        className="sm:w-[600px]"
      />
      <div className="p-4 pt-6">
        <h2 className="p-4 text-2xl text-black">{heading}</h2>
        <p className="bg-white/70 p-4 text-base text-black">{description}</p>
      </div>
    </div>
  );
};
