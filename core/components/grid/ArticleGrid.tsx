import React from "react";
import Article, { IArticle } from "./Article";
import TextItem from "./TextItem";

export interface IArticleGrid {
  articles: IArticle[];
}

const ArticleGrid: React.FC<IArticleGrid> = ({ articles }) => {
  return (
    <section className="m-0 p-0 grid md:grid-cols-5 lg:grid-cols-5 grid-cols-2 border-box">
      <TextItem width="w-full" rowSpan={"row-span-1"} colEnd={"col-span-2"} />
      <Article
        name={articles[1].name}
        imageScr={articles[1].imageScr}
        specialPrice={articles[1].specialPrice}
        oldPrice={articles[1].oldPrice}
        articleSrc={articles[1].articleSrc}
        colEnd={"col-start-1"}
        rowSpan={"row-span-1"}
      />
      <Article
        name={articles[0].name}
        imageScr={
          Array.isArray(articles[0].imageScr)
            ? articles[0].imageScr[0]
            : articles[0].imageScr
        }
        specialPrice={articles[0].specialPrice}
        oldPrice={articles[0].oldPrice}
        articleSrc={articles[0].articleSrc}
        rowSpan={"row-span-3 row-start-1 "}
        colEnd={"col-span-3 col-start-3"}
      />

      {articles.map((article, index) => {
        return (
          <Article
            key={index}
            name={article.name}
            imageScr={
              Array.isArray(article.imageScr)
                ? article.imageScr[0]
                : article.imageScr
            }
            specialPrice={article.specialPrice}
            oldPrice={article.oldPrice}
            articleSrc={article.articleSrc}
            rowSpan={
              index % 3 == 0
                ? "lg:row-span-3 md:row-span-3 row-span-1"
                : "row-span-2 lg:row-span-2 md:row-span-2 "
            }
            colEnd={
              index % 3 == 0
                ? "lg:col-span-3 md:col-span-3 col-span-2"
                : "col-span-1 lg:col-span-2 md:col-span-2"
            }
          />
        );
      })}
    </section>
  );
};

export default ArticleGrid;
