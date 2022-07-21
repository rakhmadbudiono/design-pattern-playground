import Product from "./product";

export default interface Builder {
  product: Product;

  reset();
  buildA();
  buildB();
  getProduct(): Product;
}
