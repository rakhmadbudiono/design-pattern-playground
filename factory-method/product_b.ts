import Product from "./product";

export default class ProductB implements Product {
  name: String;

  constructor() {
    this.name = "B";
  }

  public printTagline() {
    console.log(this.name, ": it's morBBing time");
  }
}
