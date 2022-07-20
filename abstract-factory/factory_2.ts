import Factory from "./factory";
import ProductA from "./product_a";
import ProductB from "./product_b";
import Product2A from "./product_2a";
import Product2B from "./product_2b";

export default class Factory2 implements Factory {
  public createProductA(): ProductA {
    return new Product2A();
  }

  public createProductB(): ProductB {
    return new Product2B();
  }
}
