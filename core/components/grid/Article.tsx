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
      className={`${rowSpan} ${colEnd} overflow-hidden w-full text-black font-capriola flex flex-col  items-center outline overflow-hidden relative p-10`}
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
      <div className="flex justify-around items-center min-h-[20%]  p-5">
        <h5 className="py-2 px-1 text-black text xl:text-base lg:text-md md:text-xs w-[50%] text-ellipsis">
          {name}
        </h5>
        <div className="flex-col items-center">
          <p className="xl:text-xl lg:text-base md:text-sm text-base p-3 underline text-black">
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
