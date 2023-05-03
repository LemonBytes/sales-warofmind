import React from "react";

interface ITextItem {
  width?: string;
  rowSpan?: string;
  colEnd?: string;
}

const TextItem: React.FC<ITextItem> = ({ rowSpan, colEnd }) => {
  return (
    <div
      className={`${rowSpan} ${colEnd} h-full text-black font-capriola  outline outline-blurrRed`}
    >
      <div className="w-full h-[50%]">
        <p className="text-left lg:text-5xl md:text-3xl text-2xl p-10 leading-tight">
          MOST RECENT SALES OF FIGHTING GEAR
        </p>
      </div>
      <div className="text-right lg:text-base flex  text-xs items-end justify-end w-full h-[50%]  bottom-2 ">
        <p className="p-8 lg:w-[60%] ">
          Your go-to destination for the newest sales on high-quality fighting
          sports equipment. We offer a wide range of products from top brands!
        </p>
      </div>
    </div>
  );
};

export default TextItem;
