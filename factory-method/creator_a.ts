import Creator from "./creator";
import Product from "./product";
import ProductA from "./product_a";

export default class CreatorA extends Creator {
  public createProduct(): Product {
    return new ProductA();
  }
}
