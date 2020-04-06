const CEDPR = (products) => {
   return products.reduce((a, b) => ({revenue: a.revenue + b.revenue}));
};

export default CEDPR;