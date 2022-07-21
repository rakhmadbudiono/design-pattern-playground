import Builder from "./builder";
import Product2 from "./product_2";
import Product from "./product";

export default class ConcreteBuilder2 implements Builder {
  product: Product;

  constructor() {
    this.reset();
  }

  reset() {
    this.product = new Product2();
  }

  public buildA() {
    this.product.parts.push("A");
  }

  public buildB() {
    this.product.parts.push("B");
  }

  public getProduct(): Product {
    const product = this.product;
    this.reset();

    return product;
  }
}
