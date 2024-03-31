import { getConcept } from "@/lib/microcms";
import { notFound } from "next/navigation";
import { ConceptItem } from "./_components/ConceptItem";

/**
 * コンセプトページ
 * /concept
 */
const Page = async () => {
  const concept = await getConcept();
  if (!concept) return notFound();

  return (
    <>
      <h1 className="absolute left-10 top-[17%] z-[1] text-5xl text-black">
        Concept
      </h1>
      {concept.contents.map((item) => {
        return <ConceptItem key={item.id} {...item.image} {...item} />;
      })}
    </>
  );
};

export default Page;
