import React from "react";
import Article from "./Article";
import TextItem from "./TextItem";

const test = {
  name: "TestTest",
  imageScr: [
    "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
  ],
  specialPrice: "25.99€",
  oldPrice: "22.99€",
};
const Pregrid = () => {
  return (
    <section className="flex h-screen w-screen">
      <section className="flex-col w-[35vw] border-0.5 border-blurrRed ">
        <TextItem width="w-full" height="h-[50vh]" />
        <Article
          name={test.name}
          imageScr={test.imageScr}
          specialPrice={test.specialPrice}
          oldPrice={test.oldPrice}
          width="w-full"
        />
      </section>
      <section className="w-[70vw] h-full">
        <Article
          name={test.name}
          imageScr={test.imageScr}
          specialPrice={test.specialPrice}
          oldPrice={test.oldPrice}
          width="w-full"
        />
      </section>
    </section>
  );
};

export default Pregrid;
