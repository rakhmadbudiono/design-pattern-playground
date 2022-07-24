import Implementation from "./implementation";

export default class Abstraction {
  private implementation: Implementation;

  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }

  public printData() {
    console.log(this.implementation.data);
  }
}
