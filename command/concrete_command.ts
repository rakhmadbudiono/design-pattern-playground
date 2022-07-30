import Command from "./command";
import Receiver from "./receiver";

export default class ConcreteCommand implements Command {
  private receiver: Receiver;
  private param: String;

  constructor(receiver: Receiver, param: String) {
    this.receiver = receiver;
    this.param = param;
  }

  public execute() {
    this.receiver.operation(this.param);
  }
}
