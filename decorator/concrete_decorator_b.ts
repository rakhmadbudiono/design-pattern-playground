import BaseDecorator from "./base_decorator";

export default class ConcreteDecoratorB extends BaseDecorator {
  public printData() {
    console.log("concrete decorator B");
    super.printData();
  }
}
