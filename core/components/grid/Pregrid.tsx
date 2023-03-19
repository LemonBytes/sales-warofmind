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
    <div className="flex h-screen w-screen">
      <section className="flex-col w-[34vw] h-full ">
        <TextItem width="w-full" height="h-[50vh]" />
        <Article
          name={test.name}
          imageScr={test.imageScr}
          specialPrice={test.specialPrice}
          oldPrice={test.oldPrice}
          width="w-full"
          height="h-[50%]"
        />
        <div className="border h-[50vh] w-full"></div>
      </section>
      <div className="border border-white h-screen w-[64wv]"></div>
    </div>
  );
};

export default Pregrid;
