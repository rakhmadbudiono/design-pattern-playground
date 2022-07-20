import Product from "./product";

export default abstract class Creator {
  public abstract createProduct(): Product;

  public printHelloWorld() {
    console.log("Hello World!");
  }
}
