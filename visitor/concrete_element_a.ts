import Element from "./element";
import Visitor from "./visitor";

export default class ConcreteElementA implements Element {
  public accept(v: Visitor) {
    v.visitA(this);
  }

  public askTime() {
    console.log("what time is it?");
  }
}
