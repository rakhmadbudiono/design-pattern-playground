import Service from "./service";
import Client from "./client";

export default class Adaptor implements Client {
  service: Service;

  constructor(service: Service) {
    this.service = service;
  }

  public printData() {
    if (this.service.data == "what time is it?") {
      console.log("it's morbing time");
    }
  }
}
