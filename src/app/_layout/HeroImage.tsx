"use client";

import { MicroCMSImage } from "microcms-js-sdk";
import Image from "next/image";

type Props = {
  /** 画像データ */
  image: MicroCMSImage;
  /** animation-delay用の値 */
  delay: number;
  /** altテキスト */
  alt: string;
};

/**
 * 加工したヒーロー画像を返すコンポーネント
 */
export const HeroImage = ({ image, delay, alt }: Props) => {
  return (
    <Image
      src={image.url + "?w=2000"}
      width={2000}
      height={image.height}
      style={{
        height: "100%",
        objectFit: "cover",
        animationDelay: `${delay * 5}s`,
      }}
      alt={alt}
      className={`absolute inset-0 animate-anim align-top opacity-0`}
    />
  );
};
