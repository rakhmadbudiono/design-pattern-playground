import ConcreteElementA from "./concrete_element_a";
import ConcreteElementB from "./concrete_element_b";

export default interface Visitor {
  visitA(e: ConcreteElementA);
  visitB(e: ConcreteElementB);
}
