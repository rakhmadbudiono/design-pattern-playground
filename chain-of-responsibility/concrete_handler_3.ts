import BaseHandler from "./base_handler";

export default class ConcreteHandler3 extends BaseHandler {
  public handle() {
    console.log("time");

    if (this.next == null) return;
    this.next.handle();
  }
}
