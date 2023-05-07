import { IArticle } from "../entities/article";
import { IBrand } from "../entities/brand";
import { IJsonArticle } from "../entities/json.article";

interface IParseProducts {
  parse(json: { [key: string]: IJsonArticle[] }): IBrand;
}

export default class ProductParser implements IParseProducts {
  parse(json: { [key: string]: IJsonArticle[] }): IBrand {
    const brands: IBrand = {};
    Object.keys(json).forEach((brandName: string) => {
      brands[brandName] = json[brandName].map(
        (article: IJsonArticle): IArticle => {
          return {
            name: article.product_name,
            imageScr: article.product_image,
            articleSrc: article.product_link,
            specialPrice: article.product_special_price,
            oldPrice: article.product_price,
          };
        }
      );
    });
    return brands;
  }
}
