import BaseHandler from "./base_handler";

export default class ConcreteHandler1 extends BaseHandler {
  public handle() {
    console.log("it's");

    if (this.next == null) return;
    this.next.handle();
  }
}
