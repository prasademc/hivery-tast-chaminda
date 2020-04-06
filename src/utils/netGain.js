const NetGain = (spr, cpr, cproducts) => {
    var cedpr = cproducts.reduce((a, b) => ({revenue: a.revenue + b.revenue}));
    var sprNumber = parseFloat(spr);
    var cedprNumber = parseFloat(cedpr.revenue);

    return (sprNumber - cpr - cedprNumber);
};

export default NetGain;