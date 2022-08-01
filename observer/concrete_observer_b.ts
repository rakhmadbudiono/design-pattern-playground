import ConcreteSubject from "./concrete_subject";
import Observer from "./observer";
import Subject from "./subject";

export default class ConcreteObserverB implements Observer {
  public update(subject: Subject) {
    if (subject instanceof ConcreteSubject && subject.state < 3) {
      console.log("ConcreteObserverB: Reacted to the event.");
    }
  }
}
