import ConcreteStateA from "./concrete_state_a";
import Context from "./context";

function main() {
  const context = new Context(new ConcreteStateA());
  context.request1();
  context.request2();
}

main();
