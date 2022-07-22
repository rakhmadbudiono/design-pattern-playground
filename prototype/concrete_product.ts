import Product from "./product";

export default class ConcreteProduct implements Product {
  name: String;

  constructor(name: String) {
    this.name = name;
  }

  private fromProduct(product: Product): ConcreteProduct {
    return new ConcreteProduct(product.name);
  }

  public clone(): Product {
    return this.fromProduct(this);
  }

  public printProductName() {
    console.log(this.name);
  }
}
