import Element from "./element";
import Visitor from "./visitor";

export default class ConcreteElementB implements Element {
  public accept(v: Visitor) {
    v.visitB(this);
  }

  public tellTime() {
    console.log("it's morbing time");
  }
}
