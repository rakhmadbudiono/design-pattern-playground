import AbstractClass from "./abstract_class";

export default class ConcreteClass2 extends AbstractClass {
  protected requiredOperations1() {
    console.log("ConcreteClass2 says: Implemented Operation1");
  }

  protected requiredOperation2() {
    console.log("ConcreteClass2 says: Implemented Operation2");
  }

  protected hook1() {
    console.log("ConcreteClass2 says: Overridden Hook1");
  }
}
