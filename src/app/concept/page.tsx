import { getConcept, getImages } from "@/lib/microcms";
import { notFound } from "next/navigation";
import { ConceptItem } from "./_components/ConceptItem";
import Image from "next/image";

/**
 * コンセプトページ
 * /concept
 */
const Page = async () => {
  const topImage = await getImages("gallery", "concept_top");
  const concept = await getConcept();
  if (!topImage || !concept) return notFound();

  return (
    <div className="relative">
      <h1 className="absolute left-5 top-[3%] z-[1] text-5xl text-black sm:left-[30%]">
        Concept
      </h1>
      <Image
        src={topImage.contents[0].image.url + "?w=2000"}
        width={2000}
        height={topImage.contents[0].image.height}
        style={{
          height: "100svh",
          objectFit: "cover",
        }}
        alt={topImage.contents[0].alt}
      />
      {concept.contents.map((item) => {
        return <ConceptItem key={item.id} {...item.image} {...item} />;
      })}
    </div>
  );
};

export default Page;
