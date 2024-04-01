import { getInfoImage } from "@/lib/microcms";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

/**
 * インフォメーションページ
 * /infomation
 */
const Page = async () => {
  const info = await getInfoImage();
  console.log(info);

  if (!info) return notFound();

  return (
    <div className="relative min-h-screen bg-orange-50 pb-5">
      <div className="absolute inset-x-8 top-[8%] z-[1] flex flex-col gap-5 text-white/80">
        <h1 className="text-5xl">Infomation</h1>
      </div>
      <Image
        src={info.contents[0].image.url + "?w=2000"}
        width={2000}
        height={info.contents[0].image.height}
        style={{
          minHeight: "100svh",
          objectFit: "cover",
          filter: "brightness(70%)",
        }}
        alt={info.contents[0].alt}
      />

      <div className="flex flex-col gap-4 p-5">
        <h2>SUGOI Restrant</h2>
        <div>
          <p>12:00-15:00 (LO. 14:00)</p>
          <p>18:00-23:00 (LO. 22:00)</p>
          <p>水曜定休日</p>
        </div>

        <div>
          <Link href="tel:0335403700" className="inline-block">
            Tel.{" "}
            <span className="border-b border-dashed border-black">
              03-3540-3700
            </span>
          </Link>
          <Link href="mailto:info@example.com" className="block">
            Mail.{" "}
            <span className="border-b border-dashed border-black">
              info@example.com
            </span>
          </Link>
        </div>

        <Link
          href="https://www.google.com/maps/place/34.165919,+141.626756/@33.9989906,138.9529744,7z/data=!4m4!3m3!8m2!3d34.1659188!4d141.6267557?authuser=0"
          rel="noopener noreferrer"
          target="_blank"
          className="w-fit bg-black p-2 text-center text-white"
        >
          Google Map
        </Link>

        <Image
          src={info.contents[1].image.url + "?w=2000"}
          width={2000}
          height={info.contents[1].image.height}
          style={{
            width: "100%",
            objectFit: "cover",
          }}
          alt={info.contents[1].alt}
        />

        <div className="self-center">
          <p>〒111-1111 東京都中央区中央町0-0-0</p>
          <p className="text-center">中央駅より徒歩3分</p>
        </div>

        <div className="w-fit self-center bg-red-700 px-5 py-3 text-white">
          RESERVATION
        </div>
      </div>
    </div>
  );
};

export default Page;
