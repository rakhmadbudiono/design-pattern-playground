import Component from "./component";

export default class BaseDecorator implements Component {
  public wrappee: Component;

  constructor(wrappee: Component) {
    this.wrappee = wrappee;
  }

  public printData() {
    console.log("base decorator");
    this.wrappee.printData();
  }
}
