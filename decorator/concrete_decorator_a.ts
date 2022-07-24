import BaseDecorator from "./base_decorator";

export default class ConcreteDecoratorA extends BaseDecorator {
  public printData() {
    console.log("concrete decorator A");
    super.printData();
  }
}
