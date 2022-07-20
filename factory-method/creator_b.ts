import Creator from "./creator";
import Product from "./product";
import ProductB from "./product_b";

export default class CreatorB extends Creator {
  public createProduct(): Product {
    return new ProductB();
  }
}
