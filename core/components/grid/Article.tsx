import React from "react";
import Image from "next/image";

export interface IArticle {
  name: string;
  imageScr: string[];
  specialPrice: string;
  oldPrice: string;
  width?: string;
  height?: string;
}

const Article: React.FC<IArticle> = ({
  name,
  imageScr,
  specialPrice,
  oldPrice,
  width,
  height,
}) => {
  return (
    <div
      className={`${width}  border-0.5 border-blurrRed text-white pt-[100%] relative font-capriola`}
    >
      <div className="w-full h-full absolute inset-0 ">
        <Image
          src={imageScr[0]}
          alt={"Test Image"}
          width={500}
          height={500}
          sizes="height:100%"
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 ">
        <h3 className="text-xl">{name}</h3>
        <p className="text-xl">{specialPrice}</p>
        <p className="text-xl">{oldPrice}</p>
      </div>
    </div>
  );
};

export default Article;
