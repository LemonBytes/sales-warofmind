import React from "react";
import Image from "next/image";

export interface IArticle {
  name: string;
  imageScr: string[];
  articleSrc: string;
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
}) => {
  return (
    <div
      className={`${width} outline outline-t outline-blurrRed text-white pt-[100%] relative font-capriola`}
    >
      <div className="w-full h-[85%] absolute inset-0 ">
        <Image
          src={imageScr[0]}
          alt={"Test Image"}
          width={500}
          height={500}
          sizes="height:100%"
          className="w-full h-full"
        />
      </div>
      <div className="absolute flex justify-evenly  outline-x inset-x-0 min-h-[140px] max-h-[140px] md:max-h-[110px] md:min-h-[110px]  outline-b  items-center   outline-blurrRed ">
        <h6 className="py-2 px-1 text-blurrRed text xl:text-xl lg:text-base md:text-xs  w-[50%]">
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

        <button className="xl:text-base p-2 lg:text-sm   md:text-xs text-blurrRed outline">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default Article;
