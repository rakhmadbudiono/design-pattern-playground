import ConcreteMemento from "./concrete_memento";
import Memento from "./memento";

export default class Originator {
  private state: String;

  public save(): Memento {
    return new ConcreteMemento(this.state);
  }

  public restore(m: Memento) {
    this.state = m.getState();
  }

  public operation(s: String) {
    this.state = s;
  }

  public printState() {
    console.log(this.state);
  }
}
