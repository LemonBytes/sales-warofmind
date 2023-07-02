import Head from "next/head";
import Header from "../../core/components/warpper/header/Header";
import ProductGrid from "../../core/components/grid/ProductGrid";
import productList from "../../public/static/products/productList.json";
import { IBrand } from "../../core/entities/brand";
import Footer from "../../core/components/warpper/footer/Footer";
import ProductParser from "../../core/adapters/ParseProducts";

//write a parse which takes the json and returns an array of IArticle
//then you can use the array in the ArticleGrid component
// how to parse a json file to a javascript object
// https://stackoverflow.com/questions/20008134/how-to-parse-a-json-file-in-javascript

export default function Home(props: IBrand) {
  return (
    <>
      <Head>
        <title>SALES - War of Mind</title>
        <meta
          name="description"
          content="Discover the Best Training Equipment for MMA, Muay Thai, and Boxing at Unbeatable Prices | Limited-Time Sales & Discounts
Looking to elevate your combat sports training? Look no further! Explore our extensive collection of high-quality MMA, Muay Thai, and Boxing training equipment, all available at incredible discounts during our limited-time sale. Find the perfect gear to enhance your performance and take your training to the next level.
At our website, we specialize in curating the best training equipment for combat sports enthusiasts. Whether you're a professional fighter or a beginner, our selection offers a wide range of products designed to meet your specific needs. From gloves and pads to punching bags and protective gear, we've got you covered.
We understand the importance of quality when it comes to training equipment. That's why we meticulously handpick our products from top brands known for their durability, functionality, and performance. Our mission is to provide you with the highest quality gear to maximize your training effectiveness and ensure your safety.
Why pay full price when you can enjoy significant savings? Our limited-time sales and discounts allow you to access premium training equipment at unbeatable prices. Each product listing provides detailed descriptions, customer reviews, and specifications, giving you all the information you need to make an informed purchase.
Whether you're passionate about MMA, Muay Thai, or Boxing, our website is your ultimate destination for finding the best training gear. We cater to all skill levels and training preferences, making it easy for you to find the equipment that suits your style and goals. With our user-friendly interface and secure payment options, you can shop with confidence and peace of mind.
Don't miss out on this exclusive opportunity to upgrade your training equipment while saving money. Our limited-time sale won't last forever, so take advantage of these incredible discounts today. Visit our website and explore our wide selection of MMA, Muay Thai, and Boxing products on sale.
Shop now to discover the best training equipment at discounted prices. Experience the difference high-quality gear can make in your combat sports journey. Elevate your training, improve your skills, and achieve your goals with our top-notch products."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../../public/static/images/logo.jpg" />
      </Head>

      <ProductGrid products={props} />
    </>
  );
}

export async function getStaticProps() {
  const productParser = new ProductParser();
  const products = productParser.parse(productList);
  return {
    props: {
      ...products,
    },
  };
}
