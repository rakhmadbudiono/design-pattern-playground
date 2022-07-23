import Adaptor from "./adaptor";
import Service from "./service";
import Client from "./client";

function main() {
  const service: Service = new Service();
  const adaptor: Client = new Adaptor(service);

  service.printExternalData();
  adaptor.printData();
}

main();
