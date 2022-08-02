import ConcreteElementA from "./concrete_element_a";
import ConcreteElementB from "./concrete_element_b";
import Visitor from "./visitor";

export default class ConcreteVisitor implements Visitor {
  public visitA(e: ConcreteElementA) {
    e.askTime();
  }
  public visitB(e: ConcreteElementB) {
    e.tellTime();
  }
}
