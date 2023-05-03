import React from "react";
import Article from "./Article";
import TextItem from "./TextItem";
import { IBrand } from "../../entities/brand";
import { IArticle } from "../../entities/article";

export interface IProductGrid {
  products: IBrand;
}

const mapBackgroundColor = (brandName: string) => {
  return brandName === "venum" ? "bg-venumWhite" : "bg-white";
};

const ArticleGrid: React.FC<IProductGrid> = ({ products }) => {
  return (
    <section>
      {Object.keys(products).map((brandName: string, index: number) => {
        return (
          <>
            <section
              className={`m-0 p-0  grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2 border-box ${mapBackgroundColor(
                brandName
              )}`}
            >
              <h1
                className={`col-span-4 w-full text-black md:text-5xl text-3xl font-capriola px-2 md:px-20 uppercase text-center border border-black h-40 flex items-center ${
                  index % 2 == 0 ? "justify-start" : "justify-end"
                }`}
              >
                {brandName}
              </h1>
              <TextItem colEnd="col-span-2" rowSpan="row-span-1" />
              {products[brandName].map((article: IArticle, index: number) => {
                return (
                  <Article
                    key={index}
                    name={article.name}
                    imageScr={article.imageScr}
                    articleSrc={article.articleSrc}
                    specialPrice={article.specialPrice}
                    oldPrice={article.oldPrice}
                    colEnd={
                      index % 5 == 0
                        ? "md:col-span-2 lg:row-span-2 col-span-4"
                        : "md:col-span-1 lg:row-span-1 col-span-4"
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

export default ArticleGrid;
