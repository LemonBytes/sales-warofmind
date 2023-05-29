import React from "react";

interface ITextItem {
  width?: string;
  rowSpan?: string;
  colEnd?: string;
  largeText?: string;
  smallText?: string;
}

const TextItem: React.FC<ITextItem> = ({
  rowSpan,
  colEnd,
  largeText,
  smallText,
}) => {
  return (
    <div
      className={`${rowSpan} ${colEnd} h-full text-black font-capriola  outline outline-blurrRed`}
    >
      <div className="w-full h-[50%]">
        <p className="text-left lg:text-6xl text-3xl md:p-10 p-6 leading-tight uppercase">
          {largeText}
        </p>
      </div>
      <div className="text-right lg:text-base flex  text-sm items-end justify-end w-full h-[50%]  bottom-2 ">
        <p className="p-8 lg:w-[60%] ">{smallText}</p>
      </div>
    </div>
  );
};

export default TextItem;
