import Image from "next/image";
import Link from "next/link";

export const Gallery = () => {
  return (
    <div className="relative">
      <h1>Gallery</h1>
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
      <Image
        src="https://via.placeholder.com/500x500/0bf/?text=galley"
        width={100}
        height={100}
        style={{ width: "100%" }}
        alt="Gallery"
      />
      <Image
        src="https://via.placeholder.com/500x500?text=galley"
        width={100}
        height={100}
        style={{ width: "100%" }}
        alt="Gallery"
      />
      <Link href="#">Read more</Link>
    </div>
  );
};
