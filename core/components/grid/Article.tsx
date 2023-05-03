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
      className={`${rowSpan} ${colEnd} overflow-hidden w-full text-black font-capriola flex flex-col  items-center outline relative p-10`}
    >
      <Link href={articleSrc} target="_blank">
        <div className="w-full h-full border-box overflow-hidden">
          <Image
            src={imageScr}
            alt={"Test Image"}
            width={1000}
            height={700}
            className="object-center"
          />
        </div>
      </Link>
      <div className="flex  justify-evenly items-center min-h-[20%] py-5 w-full flex-col md:flex-row lg:flex-row ">
        <h5 className="py-1 px-1 text-black text xl:text-base lg:text-md md:text-xs md:text-left lg:text-left xl:text-left text-center md:w-[60%] lg:w-[60%] xl:w-[60%] text-clip text-left">
          {name}
        </h5>
        <div className="flex-col items-center">
          <p className="xl:text-xl lg:text-base md:text-sm text-2xl p- underline text-black">
            {specialPrice}
          </p>
          <p className="xl:text-base lg:text-sm md:text-xs line-through">
            {oldPrice}
          </p>
        </div>
        <a
          href={articleSrc}
          target="_blank"
          className="xl:sm p-2 lg:text-sm md:text-xs text-black w-32 m-5 outline text-center border-1 border-black hover:bg-black hover:text-white transition-all duration-500 ease-in-out"
        >
          BUY NOW
        </a>
      </div>
    </article>
  );
};

export default Article;
