import AbstractClass from "./abstract_class";
import ConcreteClass1 from "./concrete_class_1";
import ConcreteClass2 from "./create_class_2";

function main() {
  console.log("Same client code can work with different subclasses:");
  clientCode(new ConcreteClass1());
  console.log("");

  console.log("Same client code can work with different subclasses:");
  clientCode(new ConcreteClass2());
}

function clientCode(abstractClass: AbstractClass) {
  abstractClass.templateMethod();
}

main();
