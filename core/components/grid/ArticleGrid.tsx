import React from "react";
import Article from "./Article";
import TextItem from "./TextItem";
import { IBrand } from "../../entities/brand";
import { IArticle } from "../../entities/article";

export interface IProductGrid {
  products: IBrand
}

const ArticleGrid: React.FC<IProductGrid> = ({ products }) => {
  return (
    <section>
     
      {Object.keys(products).map((brandName: string) => {
        return (
          <section className="m-0 p-0 col-span-3 row-span-3 grid md:grid-cols-3 lg:grid-cols-3 grid-cols-2 border-box">
            <h1 className="row-span-3 col-span-3 text-3xl text-center">{brandName}</h1>
            {products[brandName].map((article: IArticle, index: number) => {
              return (
                <Article
                  key={index}
                  name={article.name}
                  imageScr={article.imageScr}
                  articleSrc={article.articleSrc}
                  specialPrice={article.specialPrice}
                  oldPrice={article.oldPrice}
                  rowSpan={index % 3 == 0

                    ? "row-span-2"
                    : "row-span-1"}

                  colEnd={index % 3 == 0
                    ? "col-span-2"
                    : "col-span-1"}/>
              );
            })}
          </section>
          )
      })}
    </section>
  );
};

export default ArticleGrid;
