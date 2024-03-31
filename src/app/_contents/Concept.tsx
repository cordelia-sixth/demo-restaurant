import Image from "next/image";
import Link from "next/link";

export const Concept = () => {
  return (
    <div className="relative flex h-screen flex-col justify-between bg-slate-200 pt-5 text-black">
      <Image
        src="https://via.placeholder.com/500x500?text=galley"
        width={100}
        height={100}
        style={{ width: "100%" }}
        className="absolute inset-0 z-0 h-full"
        alt="Gallery"
      />
      <h1 className="absolute left-10 top-[20%] z-[1] text-5xl">Concept</h1>

      <Link
        href="/concept"
        className="absolute bottom-40 left-10 right-0 z-[1] flex bg-slate-400 p-5"
      >
        <div className="flex flex-col justify-between gap-8">
          <p className="text-5xl">Lorem ipsum dolor sit amet consectetur</p>
          <p className="border-b text-2xl">Read more</p>
        </div>
      </Link>
    </div>
  );
};
