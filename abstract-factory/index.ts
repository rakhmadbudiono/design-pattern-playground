import Factory from "./factory";
import Factory1 from "./factory_1";
import Factory2 from "./factory_2";
import ProductA from "./product_a";
import ProductB from "./product_b";

function main() {
  const factory1: Factory = new Factory1();
  const factory2: Factory = new Factory2();

  const product1A: ProductA = factory1.createProductA();
  const product1B: ProductB = factory1.createProductB();
  const product2A: ProductA = factory2.createProductA();
  const product2B: ProductB = factory2.createProductB();

  product1A.printName();
  product1B.printName();
  product2A.printName();
  product2B.printName();
}

main();
