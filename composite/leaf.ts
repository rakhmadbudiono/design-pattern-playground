import Component from "./component";

export default class Leaf implements Component {
  public data: String;

  constructor(data: String) {
    this.data = data;
  }

  public printData() {
    console.log(this.data);
  }
}
