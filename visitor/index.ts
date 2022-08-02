import ConcreteElementA from "./concrete_element_a";
import ConcreteElementB from "./concrete_element_b";
import ConcreteVisitor from "./concrete_visitor";
import Element from "./element";
import Visitor from "./visitor";

function main() {
  const elements: Array<Element> = [
    new ConcreteElementA(),
    new ConcreteElementB(),
  ];

  const visitor: Visitor = new ConcreteVisitor();

  elements.forEach((element) => {
    element.accept(visitor);
  });
}

main();
