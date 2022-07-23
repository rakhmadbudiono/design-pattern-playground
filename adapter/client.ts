import Service from "./service";

export default interface Client {
  service: Service;

  printData();
}
