import Handler from "./handler";
import ConcreteHandler1 from "./concrete_handler_1";
import ConcreteHandler2 from "./concrete_handler_2";
import ConcreteHandler3 from "./concrete_handler_3";

function main() {
  const concreteHandler1: Handler = new ConcreteHandler1();
  const concreteHandler2: Handler = new ConcreteHandler2();
  const concreteHandler3: Handler = new ConcreteHandler3();

  concreteHandler1.setNext(concreteHandler2);
  concreteHandler2.setNext(concreteHandler3);

  concreteHandler1.handle();
}

main();
