import component from "./component";
import ComponentA from "./component_a";
import ComponentB from "./component_b";
import Mediator from "./mediator";

export default class ConcreteMediator implements Mediator {
  public notify(sender: component) {
    if (sender instanceof ComponentA) {
      this.reactOnA();
    }
    if (sender instanceof ComponentB) {
      this.reactOnB();
    }
  }

  private reactOnA() {
    console.log("what time is it?");
  }
  private reactOnB() {
    console.log("it's morbing time");
  }
}
