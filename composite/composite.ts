import Component from "./component";
import Leaf from "./leaf";

export default class Composite implements Component {
  private data: Array<String>;

  constructor() {
    this.data = [];
  }

  public add(leaf: Leaf) {
    this.data.push(leaf.data);
  }

  public printData() {
    console.log(this.data);
  }
}
