import Component from "./component";
import Mediator from "./mediator";

export default class ComponentA implements Component {
  public mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }

  public askTime() {
    this.mediator.notify(this);
  }
}
