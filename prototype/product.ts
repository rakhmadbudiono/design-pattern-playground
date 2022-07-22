export default interface Product {
  name: String;

  clone(): Product;
  printProductName();
}
