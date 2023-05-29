import React, { useState } from "react";
import Image from "next/image";

interface ISlide {
  imageSources: string[];
  name: string;
}

export const ImageSlide: React.FC<ISlide> = ({ imageSources, name }) => {
  const [activeImage, setActiveImage] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleImageChange = (index: number) => {
    setActiveImage(index);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX !== null) {
      const touchEndX = event.changedTouches[0].clientX;
      const touchDifference = touchEndX - touchStartX;

      if (touchDifference > 50 && activeImage > 0) {
        setActiveImage(activeImage - 1); // Swipe right
      } else if (
        touchDifference < -50 &&
        activeImage < imageSources.length - 1
      ) {
        setActiveImage(activeImage + 1); // Swipe left
      }
    }

    setTouchStartX(null);
  };

  return (
    <div
      className="w-full max-h-full max-w-[600px] flex-col flex h-auto p-5 mb-10"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative">
        <div style={{ paddingBottom: "100%" }}>
          <Image
            src={imageSources[activeImage]}
            alt={"article of " + name}
            fill
            sizes="100vw"
          />
        </div>
        <div className="absolute -bottom-10 w-full flex justify-center py-3">
          {imageSources.map((image: string, index: number) => (
            <div
              key={index}
              className={`w-3 m-1 h-3 rounded-full cursor-pointer  ${
                activeImage === index
                  ? "bg-black border-black"
                  : "border border-black"
              }`}
              onClick={() => handleImageChange(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
