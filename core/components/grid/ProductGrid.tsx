import React from "react";
import Article from "../article/Article";
import TextItem from "../article/TextItem";
import { IBrand } from "../../entities/brand";
import { IArticle } from "../../entities/article";
import { brandTexts } from "./brandTexts";
export interface IProductGrid {
  products: IBrand;
}

const mapBackgroundColor = (brandName: string) => {
  if (brandName === "venum") {
    return "bg-venumWhite";
  }
  if (brandName === "adidas") {
    return "bg-adidasWhite";
  }
  return "bg-white";
};

const ProductGrid: React.FC<IProductGrid> = ({ products }) => {
  return (
    <section>
      {Object.keys(products).map((brandName: any, index: any) => {
        return (
          <>
            <section
              className={`m-0 p-0 grid lg:grid-cols-4 grid-cols-2 lg:place-items-stretch place-items-center ${mapBackgroundColor(
                brandName
              )}`}
            >
              {/*  <h1
                className={`col-span-4 w-full text-black md:text-5xl text-3xl font-capriola px-2 md:px-20 uppercase text-center border border-black md:h-40 h-20 flex items-center ${
                  index % 2 == 0 ? "justify-start" : "justify-end"
                }`}
              >
                {brandName}
              </h1> */}
              <TextItem
                colEnd="col-span-2"
                rowSpan="row-span-2"
                smallText={brandTexts[brandName].smallText}
                largeText={brandTexts[brandName].largeText}
              />
              {products[brandName].map((article: IArticle, index: number) => {
                return (
                  <Article
                    key={index}
                    name={article.name}
                    imageSources={article.imageSources}
                    articleSrc={article.articleSrc}
                    specialPrice={article.specialPrice}
                    oldPrice={article.oldPrice}
                    colEnd={
                      index % 3 == 0
                        ? "lg:col-span-2 lg:row-span-2 col-span-2"
                        : "lg:col-span-1 lg:row-span-1 col-span-2"
                    }
                  />
                );
              })}
            </section>
          </>
        );
      })}
    </section>
  );
};

export default ProductGrid;
