import React from "react";

interface ITextItem {
  width: string;
  height: string;
}

const TextItem: React.FC<ITextItem> = ({ width, height }) => {
  return (
    <div className={`${width} ${height} text-white font-capriola`}>
      <div className="w-full h-[50%] ">
        <p className="text-left text-5xl p-10 leading-tight">
          MOST RECENT SALES OF FIGHTING GEAR
        </p>
      </div>
      <div className="text-right flex items-end justify-end w-full h-[50%] ">
        <p className="p-8 w-[55%]">
          Your go-to destination for the newest sales on high-quality fighting
          sports equipment. We offer a wide range of products from top brands!
        </p>
      </div>
    </div>
  );
};

export default TextItem;
