import Memento from "./memento";
import Originator from "./orginator";

export default class Caretaker {
  private history: Array<Memento>;
  private originator: Originator;

  constructor(originator: Originator) {
    this.originator = originator;
    this.history = [];
  }

  public undo() {
    const memento = this.history.pop();
    this.originator.restore(memento);
  }

  public backup() {
    const memento = this.originator.save();
    this.history.push(memento);
  }
}
