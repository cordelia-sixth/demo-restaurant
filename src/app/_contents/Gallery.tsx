import Image from "next/image";
import Link from "next/link";

/**
 * トップページのギャラリー
 */
export const Gallery = () => {
  return (
    <section className="relative flex min-h-screen flex-col justify-between bg-slate-200 py-64 text-black">
      <h1 className="absolute left-10 top-32 z-[1] text-5xl">Gallery</h1>

      <div className="">
        <Image
          src="https://via.placeholder.com/500x500?text=galley"
          width={100}
          height={100}
          style={{ width: "100%" }}
          alt="Gallery"
        />
        <Image
          src="https://via.placeholder.com/500x500/00f/?text=galley"
          width={100}
          height={100}
          style={{ width: "100%" }}
          alt="Gallery"
        />
        <Image
          src="https://via.placeholder.com/500x500/0af/?text=galley"
          width={100}
          height={100}
          style={{ width: "100%" }}
          alt="Gallery"
        />
      </div>

      <Link
        href="#"
        className="absolute bottom-32 left-[10%] right-0 w-[90%] border-b border-black text-2xl"
      >
        See more
      </Link>
    </section>
  );
};
