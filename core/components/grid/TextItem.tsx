import React from "react";

interface ITextItem {
  width: string;
  height: string;
}

const TextItem: React.FC<ITextItem> = ({ width, height }) => {
  return (
    <div
      className={`${width}  text-white outline- outline-blurrRed font-capriola pt-[85%] relative`}
    >
      <div className="w-full h-[50%] inset-0 absolute">
        <p className="text-left text-4xl p-10 leading-tight">
          MOST RECENT SALES OF FIGHTING GEAR
        </p>
      </div>
      <div className="text-right text-sm flex items-end justify-end w-full h-[50%] inset-x-0 bottom-2 absolute">
        <p className="p-8 w-[55%] ">
          Your go-to destination for the newest sales on high-quality fighting
          sports equipment. We offer a wide range of products from top brands!
        </p>
      </div>
    </div>
  );
};

export default TextItem;
