export default class Service {
  public data: String;

  constructor() {
    this.data = "what time is it?";
  }

  public printExternalData() {
    console.log(this.data);
  }
}
