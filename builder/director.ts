import Builder from "./builder";
import Product from "./product";

export default class Director {
  private builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  public setBuilder(builder: Builder) {
    this.builder = builder;
  }

  public buildProductA(): Product {
    this.builder.buildA();

    return this.builder.getProduct();
  }

  public buildProductAB(): Product {
    this.builder.buildA();
    this.builder.buildB();

    return this.builder.getProduct();
  }
}
