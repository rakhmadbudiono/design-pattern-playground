import ConcreteProduct from "./concrete_product";
import Product from "./product";

function main() {
  const concreteProduct: Product = new ConcreteProduct("A");
  const cloneProduct: Product = concreteProduct.clone();

  concreteProduct.printProductName();
  cloneProduct.printProductName();
}

main();
