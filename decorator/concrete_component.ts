import Component from "./component";

export default class ConcreteComponent implements Component {
  public printData() {
    console.log("concrete component");
    this.printSeparator();
  }

  private printSeparator() {
    console.log("===================");
  }
}
