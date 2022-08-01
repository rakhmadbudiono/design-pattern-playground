import Memento from "./memento";

export default class ConcreteMemento implements Memento {
  private state: String;

  constructor(state: String) {
    this.state = state;
  }

  public getState(): String {
    return this.state;
  }
}
