const Revenue = (sales, price) => {
    return (sales * (price * 0.01)).toFixed(2);
};

export default Revenue;