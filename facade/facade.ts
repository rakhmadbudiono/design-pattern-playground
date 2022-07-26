import Subsystem1 from "./subsystem_1";
import Subsystem2 from "./subsystem_2";

export default class Facade {
  protected subsystem1: Subsystem1;
  protected subsystem2: Subsystem2;

  constructor(subsystem1?: Subsystem1, subsystem2?: Subsystem2) {
    this.subsystem1 = subsystem1 || new Subsystem1();
    this.subsystem2 = subsystem2 || new Subsystem2();
  }

  public tellTime() {
    this.subsystem1.askTime();
    this.subsystem2.morb();
  }
}
