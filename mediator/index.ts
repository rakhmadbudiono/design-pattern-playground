import ComponentA from "./component_a";
import ComponentB from "./component_b";
import ConcreteMediator from "./concrete_mediator";
import Mediator from "./mediator";

function main() {
  const mediator: Mediator = new ConcreteMediator();
  const componentA: ComponentA = new ComponentA(mediator);
  const componentB: ComponentB = new ComponentB(mediator);

  componentA.askTime();
  componentB.tellTime();
}

main();
