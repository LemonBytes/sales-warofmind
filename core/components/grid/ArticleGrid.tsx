import React from "react";
import Article, { IArticle } from "./Article";

interface IArticleGrid {
  articles: IArticle[];
}

const ArticleGrid: React.FC<IArticleGrid> = ({ articles }) => {
  return (
    <section>
      {articles.map((article: IArticle, key: number) => {
        return (
          <Article
            key={key}
            name={article.name}
            imageScr={article.imageScr}
            specialPrice={article.specialPrice}
            oldPrice={article.oldPrice}
            articleSrc={article.articleSrc}
          />
        );
      })}
    </section>
  );
};

export default ArticleGrid;
