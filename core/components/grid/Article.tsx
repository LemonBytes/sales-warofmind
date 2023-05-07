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
      className={`${rowSpan} ${colEnd} overflow-hidden  lg:w-full text-black font-capriola flex flex-col items-center outline p-5`}
    >
      <Link href={articleSrc} target="_blank">
        <div className="w-full h-auto  overflow-hidden p-5">
          <Image
            src={imageScr}
            alt={"article of " + name}
            width={800}
            height={800}
            className="object-center object-cover"
          />
        </div>
      </Link>
      <div className="flex justify-evenly items-center min-h-[20%] p-5 w-full  flex-col md:flex-row">
        <h5 className="p-2 text-black text xl:text-base lg:text-md md:text-base md:text-left lg:text-left xl:text-left text-center  text-clip text-left">
          {name}
        </h5>
        <div className="flex-col items-center p-2 text-center">
          <p className="xl:text-xl lg:text-base md:text-xl text-2xl text-black">
            {specialPrice}
          </p>
          <p className="xl:text-base lg:text-sm md:text-xs line-through">
            {oldPrice}
          </p>
        </div>
        <a
          href={articleSrc}
          target="_blank"
          className="xl:sm p-2 lg:text-sm md:text-base text-black lg:w-20 p-10 m-5 w-40   outline  text-center border-1 border-black hover:bg-black hover:text-white transition-all duration-500 ease-in-out"
        >
          {`BUY \n NOW`}
        </a>
      </div>
    </article>
  );
};

export default Article;
