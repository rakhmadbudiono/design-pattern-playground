import Component from "./component";
import Mediator from "./mediator";

export default class ComponentB implements Component {
  public mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }

  public tellTime() {
    this.mediator.notify(this);
  }
}
