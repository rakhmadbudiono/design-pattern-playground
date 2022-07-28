import IService from "./iservice";

export default class Service implements IService {
  public async printData() {
    const start: number = Date.now();

    await new Promise((r) => setTimeout(r, 1000));
    console.log("it's morbing time");

    const end: number = Date.now();
    console.log(end - start);
  }
}
