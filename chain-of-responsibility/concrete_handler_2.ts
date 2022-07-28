import BaseHandler from "./base_handler";

export default class ConcreteHandler1 extends BaseHandler {
  public handle() {
    console.log("morbing");

    if (this.next == null) return;
    this.next.handle();
  }
}
