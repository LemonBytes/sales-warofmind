import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface IArticle {
  name: string;
  imageScr: string;
  articleSrc: string;
  specialPrice: string;
  oldPrice: string;
  width?: string;
  rowSpan?: string;
  colEnd?: string;
}

const Article: React.FC<IArticle> = ({
  name,
  imageScr,
  articleSrc,
  specialPrice,
  oldPrice,
  rowSpan,
  colEnd,
}) => {
  console.log(articleSrc);
  return (
    <article
      className={`${rowSpan} ${colEnd} overflow-hidden w-full text-white font-capriola flex flex-col justify-evenly items-center box-border overflow-hidden relative outline outline-blurrRed`}
    >
      <Link href={articleSrc} target="_blank">
        <div className="w-full h-full  border-box overflow-hidden">
          <Image
            src={imageScr}
            alt={"Test Image"}
            width={400}
            height={500}
            className="object-fit  overflow-hidden p-5"
          />
        </div>
      </Link>
      <div className="flex justify-evenly items-center outline-blurrRed w-full min-h-[100px] max-h-[100px] p-5">
        <h6 className="py-2 px-1 text-blurrRed text xl:text-base lg:text-md md:text-xs w-[50%]">
          {name}
        </h6>
        <div className="flex-col items-center">
          <p className="xl:text-xl lg:text-base md:text-sm p-3 md:text-xs underline text-blurrRed">
            {specialPrice}
          </p>
          <p className="xl:text-base p-1 lg:text-sm md:text-xs line-through">
            {oldPrice}
          </p>
        </div>
        <a
          href={articleSrc}
          target="_blank"
          className="xl:sm p-2 lg:text-sm  md:text-xs text-blurrRed outline"
        >
          BUY NOW
        </a>
      </div>
    </article>
  );
};

export default Article;
