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
    <div className={`${width} ${height} border border-white`}>
      <div className="w-full h-[80%] border-b border-white ">
        <Image
          src={imageScr[0]}
          alt={"Test Image"}
          width={500}
          height={400}
          sizes="height:80%"
          className="w-full h-full"
        />
      </div>
      <h3>{name}</h3>
      <p>{specialPrice}</p>
      <p>{oldPrice}</p>
    </div>
  );
};

export default Article;
