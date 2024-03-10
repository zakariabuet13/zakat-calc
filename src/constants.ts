const BuyingPrice = {
  Gold: {
    carat22: 9680,
    carat21: 9240,
    carat18: 7920,
    old: 6600,
  },
  Silver: {
    carat22: 180,
    carat21: 172,
    carat18: 147,
    old: 110,
  },
};

const SellingPrice = {
  Gold: {
    carat22: BuyingPrice.Gold.carat22 * 0.8,
    carat21: BuyingPrice.Gold.carat21 * 0.8,
    carat18: BuyingPrice.Gold.carat18 * 0.8,
    old: BuyingPrice.Gold.old * 0.8,
  },
  Silver: {
    carat22: BuyingPrice.Silver.carat22 * 0.8,
    carat21: BuyingPrice.Silver.carat21 * 0.8,
    carat18: BuyingPrice.Silver.carat18 * 0.8,
    old: BuyingPrice.Silver.old * 0.8,
  },
};

export const Nisab = Math.ceil(SellingPrice.Silver.old * 11.664 * 52.5);

export const Price = {
  SellingPrice,
  BuyingPrice,
};
