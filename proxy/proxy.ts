import IService from "./iservice";

export default class Proxy implements IService {
  private service: IService;
  private cache: String;

  constructor(service: IService) {
    this.service = service;
  }

  public async printData() {
    const start = Date.now();

    if (this.cache == null) {
      await this.service.printData();

      this.cache = "it's morbing time";

      return;
    }

    console.log(this.cache);

    const end: number = Date.now();
    console.log(end - start);
  }
}
