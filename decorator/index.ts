import Component from "./component";
import ConcreteComponent from "./concrete_component";
import BaseDecorator from "./base_decorator";
import ConcreteDecoratorA from "./concrete_decorator_a";
import ConcreteDecoratorB from "./concrete_decorator_b";

function main() {
  const concreteComponent: Component = new ConcreteComponent();
  const baseDecorator: Component = new BaseDecorator(concreteComponent);
  const concreteDecoratorA: Component = new ConcreteDecoratorA(
    concreteComponent
  );
  const concreteDecoratorB: Component = new ConcreteDecoratorB(
    concreteComponent
  );

  concreteComponent.printData();
  baseDecorator.printData();
  concreteDecoratorA.printData();
  concreteDecoratorB.printData();
}

main();
