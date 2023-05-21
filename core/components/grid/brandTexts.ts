interface IBrandTexts {
  [key: string]: {
    largeText: string;
    smallText: string;
  };
}

export const brandTexts: IBrandTexts = {
  venum: {
    largeText: "MOST RECENT SALES OF FIGHTING GEAR",
    smallText:
      "Your go-to destination for the newest sales on high-quality fighting sports equipment. We offer a wide range of products from top brands!",
  },
  amazon: {
    largeText: "Unleash your true potential",
    smallText:
      "with our high-quality fighting gear, designed for sustained performance in every fight",
  },
  everlast: {
    largeText: "Gear up in style",
    smallText:
      "Offering sustained strength, intelligent performance and support when it matters most.",
  },
  adidas: {
    largeText: "Achieve greatness",
    smallText:
      "with our modern and ecologically fighting gear, crafted for high quality, sustained durability, and a perfect fit.",
  },
};
