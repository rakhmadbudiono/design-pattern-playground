import Creator from "./creator";
import CreatorA from "./creator_a";
import CreatorB from "./creator_b";
import Product from "./product";

function main() {
  const creatorA: Creator = new CreatorA();
  const creatorB: Creator = new CreatorB();

  creatorA.printHelloWorld();
  creatorB.printHelloWorld();

  const productA: Product = creatorA.createProduct();
  const productB: Product = creatorB.createProduct();

  productA.printTagline();
  productB.printTagline();
}

main();
