import ConcreteStateB from "./concrete_state_b";
import State from "./state";

export default class ConcreteStateA extends State {
  public handle1(): void {
    console.log("ConcreteStateA handles request1.");
    console.log("ConcreteStateA wants to change the state of the context.");
    this.context.transitionTo(new ConcreteStateB());
  }

  public handle2(): void {
    console.log("ConcreteStateA handles request2.");
  }
}
