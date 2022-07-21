export default abstract class Product {
  parts: Array<String>;

  public printProduct() {
    console.log(this.parts.join("-"));
  }
}
