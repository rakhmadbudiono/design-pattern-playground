import Factory from "./factory";
import ProductA from "./product_a";
import ProductB from "./product_b";
import Product1A from "./product_1a";
import Product1B from "./product_1b";

export default class Factory1 implements Factory {
  public createProductA(): ProductA {
    return new Product1A();
  }

  public createProductB(): ProductB {
    return new Product1B();
  }
}
