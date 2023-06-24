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
            name: this.checkName(article.product_name),
            imageSources: article.product_images,
            articleSrc: article.product_link,
            specialPrice: article.product_special_price.trim(),
            oldPrice: article.product_price.trim(),
          };
        }
      );
    });
    return brands;
  }

  checkName(name: string | string[]): string {
    if (typeof name == "string") {
      return name.trim();
    }
    return name[0].trim();
  }

  checkImages(images: string[] | string[][]): string[] {
    if (Array.isArray(images[0])) {
      return images[0] as string[]; // Explicitly cast to string[]
    } else {
      return images as string[];
    }
    // Explicitly cast to string[]
  }
}
