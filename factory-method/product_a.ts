import Product from "./product";

export default class ProductA implements Product {
  name: String;

  constructor() {
    this.name = "A";
  }

  public printTagline() {
    console.log(this.name, ": B is a loser");
  }
}
