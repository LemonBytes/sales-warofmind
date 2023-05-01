import React from "react";
import Article from "./Article";
import TextItem from "./TextItem";
import { IBrand } from "../../entities/brand";
import { IArticle } from "../../entities/article";

export interface IProductGrid {
  products: IBrand;
}

const ArticleGrid: React.FC<IProductGrid> = ({ products }) => {
  return (
    <section>
      {Object.keys(products).map((brandName: string) => {
        return (
          <>
            <section className="m-0 p-0  grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2 border-box">
              <h1 className="row-span-4 col-span-4 w-full text-black text-4xl font-capriola uppercase text-center h-40 outline flex items-center justify-center">
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
