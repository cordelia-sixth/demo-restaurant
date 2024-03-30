"use client";

import Image from "next/image";

type Props = {
  id: number;
  url: string;
  width?: number;
  height?: number;
};

export const HeaderImg = (props: Props) => {
  return (
    <Image
      src={props.url + "?w=2000"}
      width={2000}
      height={props.height}
      style={{
        height: "100%",
        objectFit: "cover",
        animationDelay: `${props.id * 5}s`,
      }}
      alt="header img"
      className={`absolute inset-0 animate-anim align-top opacity-0`}
    />
  );
};
