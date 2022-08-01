import ConcreteObserverA from "./concrete_observer_a";
import ConcreteObserverB from "./concrete_observer_b";
import ConcreteSubject from "./concrete_subject";
import Observer from "./observer";

function main() {
  const subject = new ConcreteSubject();

  const observer1: Observer = new ConcreteObserverA();
  subject.attach(observer1);

  const observer2: Observer = new ConcreteObserverB();
  subject.attach(observer2);

  subject.someBusinessLogic();
  subject.someBusinessLogic();

  subject.detach(observer2);

  subject.someBusinessLogic();
}

main();
