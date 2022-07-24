import Abstraction from "./abstraction";
import Implementation from "./implementation";
import ConcreteImplementationA from "./concrete_implementation_a";
import ConcreteImplementationB from "./concrete_implementation_b";

function main() {
  const concreteImplementationA: Implementation = new ConcreteImplementationA();
  const concreteImplementationB: Implementation = new ConcreteImplementationB();

  const abstractionA: Abstraction = new Abstraction(concreteImplementationA);
  const abstractionB: Abstraction = new Abstraction(concreteImplementationB);

  abstractionA.printData();
  abstractionB.printData();
}

main();
