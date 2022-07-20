import ProductA from "./product_a";
import ProductB from "./product_b";

export default interface Factory {
  createProductA(): ProductA;
  createProductB(): ProductB;
}
