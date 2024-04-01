import { getMenuImage } from "@/lib/microcms";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useRef } from "react";
import { Details } from "./_components/Details";

/**
 * メニューページ
 * /menu
 */
const Page = async () => {
  const menu = await getMenuImage();
  if (!menu) return notFound();

  return (
    <div className="relative min-h-screen bg-orange-50 pb-5">
      <div className="absolute inset-x-10 top-[15%] z-[1] flex flex-col gap-5 text-white/80">
        <h1 className="text-5xl">Menu</h1>
        <p className="text-2xl">旬の食材を使ったフルコースをご提供します。</p>
      </div>
      <Image
        src={menu.contents[0].image.url + "?w=2000"}
        width={2000}
        height={menu.contents[0].image.height}
        style={{
          height: "100vh",
          objectFit: "cover",
          filter: "brightness(60%)",
        }}
        alt={menu.contents[0].alt}
      />
      <Details />
      <small className="block text-center">
        価格は全て税込です。別途サービス料10%が加算されます。
      </small>
    </div>
  );
};

export default Page;
