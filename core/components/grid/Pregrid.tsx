import React from "react";
import Article from "./Article";
import TextItem from "./TextItem";

const test = {
  name: "VENUM CHALLENGER 3.0 -BOXHANDSCHUHE - SCHWARZ/SCHWARZ",
  imageScr: [
    "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
  ],
  specialPrice: "20.99€",
  oldPrice: "22.99€",
  articleSrc: "example.com",
};
const Pregrid = () => {
  return (
    <section className="h-screen w-screen m-0 p-0 grid grid-cols-[35vw_minmax(70vw,_1fr)_100px]">
      <section className="w-auto">
        <TextItem width="w-full" height="h-[50vh]" />
        <Article
          name={test.name}
          imageScr={test.imageScr}
          specialPrice={test.specialPrice}
          oldPrice={test.oldPrice}
          width="w-full"
          articleSrc={test.articleSrc}
        />
      </section>
      <section className="h-screen w-auto">
        <Article
          name={test.name}
          imageScr={test.imageScr}
          specialPrice={test.specialPrice}
          oldPrice={test.oldPrice}
          width="w-full"
          articleSrc={test.articleSrc}
        />
      </section>
    </section>
  );
};

export default Pregrid;
