import Component from "./component";

export default interface Mediator {
  notify(sender: Component);
}
