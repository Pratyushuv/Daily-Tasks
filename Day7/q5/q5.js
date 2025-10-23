function returnProduct(product) {
    return ("Product: " +
        product.name +
        " " +
        "id: " +
        product.id +
        " " +
        "price: " +
        product.price +
        " " +
        "inStock: " +
        product.inStock);
}
var product = {
    id: 1,
    name: "headset",
    price: 3000,
    inStock: true,
};
console.log(returnProduct(product));
