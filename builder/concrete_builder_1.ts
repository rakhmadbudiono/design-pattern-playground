import Builder from "./builder";
import Product1 from "./product_1";
import Product from "./product";

export default class ConcreteBuilder1 implements Builder {
  product: Product;

  constructor() {
    this.reset();
  }

  reset() {
    this.product = new Product1();
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
