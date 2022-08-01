import ConcreteStateB from "../state/concrete_state_b";
import ConcreteStrategyB from "./concrete_strategy.b";
import ConcreteStrategyA from "./concrete_strategy_a";
import Context from "./context";

function main() {
  const context = new Context(new ConcreteStrategyA());
  console.log("Client: Strategy is set to normal sorting.");
  context.doSomeBusinessLogic();

  console.log("");

  console.log("Client: Strategy is set to reverse sorting.");
  context.setStrategy(new ConcreteStrategyB());
  context.doSomeBusinessLogic();
}

main();
