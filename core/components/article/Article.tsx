import React from "react";
import { IArticle } from "../../entities/article";
import { ImageSlide } from "../slide/ImageSlide";

const Article: React.FC<IArticle> = ({
  name,
  imageSources,
  articleSrc,
  specialPrice,
  oldPrice,
  rowSpan,
  colEnd,
}) => {
  return (
    <article
      className={`${rowSpan} ${colEnd} overflow-hidden  md:w-full md:min-w-full text-black font-capriola flex flex-col items-center outline md:p-5 p-5 min-w-[100vw]`}
    >
      <ImageSlide imageSources={imageSources} name={name} />
      <div className="flex justify-evenly items-center min-h-[20%]  w-full  flex-col md:flex-row">
        <h2 className="p-2 text-black text xl:text-base  md:text-sm md:text-left lg:text-left xl:text-left text-center  text-clip text-left">
          {name}
        </h2>
        <div className="flex-col items-center p-3 text-center">
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
          rel="noopener noreferrer"
          className="xl:sm p-2 lg:text-sm md:text-base text-black lg:w-20 p-10 m-5 w-40   outline  text-center border-1 border-black hover:bg-black hover:text-white transition-all duration-500 ease-in-out"
        >
          {`BUY \n NOW`}
        </a>
      </div>
    </article>
  );
};

export default Article;
