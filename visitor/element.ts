import Visitor from "./visitor";

export default interface Element {
  accept(v: Visitor);
}
