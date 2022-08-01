import AbstractClass from "./abstract_class";

export default class ConcreteClass1 extends AbstractClass {
  protected requiredOperations1() {
    console.log("ConcreteClass1 says: Implemented Operation1");
  }

  protected requiredOperation2() {
    console.log("ConcreteClass1 says: Implemented Operation2");
  }
}
