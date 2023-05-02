import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IArticle } from "../../entities/article";

const Article: React.FC<IArticle> = ({
  name,
  imageScr,
  articleSrc,
  specialPrice,
  oldPrice,
  rowSpan,
  colEnd,
}) => {
  return (
    <article
      className={`${rowSpan} ${colEnd} overflow-hidden w-full text-black font-capriola flex flex-col  items-center outline overflow-hidden relative  `}
    >
      <Link href={articleSrc} target="_blank">
        <div className="w-full h-full border-box overflow-hidden">
          <Image
            src={imageScr}
            alt={"Test Image"}
            width={1000}
            height={700}
            className="object-fit overflow-hidden"
          />
        </div>
      </Link>
      <div className="flex justify-evenly items-center min-h-[100px] max-h-[150px] p-5">
        <h5 className="py-2 px-1 text-black text xl:text-base lg:text-md md:text-xs w-[50%] truncate">
          {name}
        </h5>
        <div className="flex-col items-center">
          <p className="xl:text-xl lg:text-base md:text-sm p-3 md:text-xs underline text-black">
            {specialPrice}
          </p>
          <p className="xl:text-base p-1 lg:text-sm md:text-xs line-through">
            {oldPrice}
          </p>
        </div>
        <a
          href={articleSrc}
          target="_blank"
          className="xl:sm p-2 lg:text-sm  md:text-xs text-black outline"
        >
          BUY NOW
        </a>
      </div>
    </article>
  );
};

export default Article;
