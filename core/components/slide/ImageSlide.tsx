import React, { useState } from "react";
import Image from "next/image";

interface ISlide {
  imageSources: string[];
  name: string;
}

export const ImageSlide: React.FC<ISlide> = ({ imageSources, name }) => {
  const [activeImage, setActiveImage] = useState<number>(0);
  return (
    <div className="w-full max-h-[80%] max-w-[600px] flex-col flex h-auto p-5">
      <div>
        {/* {imageSources.map((imageSource: string, index: number) => {
          return (
            <div key={index} className="border w-screen">
              <Image
                src={imageSource}
                alt={"article of " + name}
                width={800}
                height={800}
                className="object-center object-cover"
              />
            </div>
          );
        })} */}
        <Image
          src={imageSources[0]}
          alt={"article of " + name}
          width={600}
          height={600}
          className="object-center object-cover"
        />
      </div>
      <div className="flex w-full items-center justify-center py-10">
        {imageSources.map((image: string, index: number) => {
          return activeImage === imageSources.indexOf(image) ? (
            <div
              key={index}
              className="w-3 m-1 h-3 border border-white bg-black"
            ></div>
          ) : (
            <div key={index} className="w-3 m-1 h-3 border border-black"></div>
          );
        })}
      </div>
    </div>
  );
};
