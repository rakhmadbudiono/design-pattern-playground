import IService from "./iservice";
import Service from "./service";
import Proxy from "./proxy";

async function main() {
  const service: IService = new Service();
  const proxy: IService = new Proxy(service);

  await service.printData();
  await service.printData();

  await proxy.printData();
  await proxy.printData();
}

main();
