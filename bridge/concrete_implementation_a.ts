import Implementation from "./implementation";

export default class ConcreteImplementationA implements Implementation {
  public data: String;

  constructor() {
    this.data = "A";
  }
}
