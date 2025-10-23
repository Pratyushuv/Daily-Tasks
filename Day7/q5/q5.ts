type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

function returnProduct(product: Product): string {
  return (
    "Product: " +
    product.name +
    " " +
    "id: " +
    product.id +
    " " +
    "price: " +
    product.price +
    " " +
    "inStock: " +
    product.inStock
  );
}

const product: Product = {
  id: 1,
  name: "headset",
  price: 3000,
  inStock: true,
};

console.log(returnProduct(product));
