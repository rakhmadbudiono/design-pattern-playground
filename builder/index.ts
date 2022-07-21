import Builder from "./builder";
import ConcreteBuilder1 from "./concrete_builder_1";
import ConcreteBuilder2 from "./concrete_builder_2";
import Director from "./director";
import Product from "./product";

function main() {
  const builder1: Builder = new ConcreteBuilder1();
  const builder2: Builder = new ConcreteBuilder2();
  const director: Director = new Director(builder1);

  const product1A: Product = director.buildProductA();
  product1A.printProduct();

  const product1AB: Product = director.buildProductAB();
  product1AB.printProduct();

  director.setBuilder(builder2);

  const product2A: Product = director.buildProductA();
  product2A.printProduct();

  const product2AB: Product = director.buildProductAB();
  product2AB.printProduct();
}

main();
