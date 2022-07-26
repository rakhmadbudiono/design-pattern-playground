import Flyweight from "./flyweight";

export default class FlyweightFactory {
  private cache: { [key: string]: Flyweight };

  constructor() {
    this.cache = {};
  }

  public getFlyweight(key: string) {
    if (!(key in this.cache)) {
      this.cache[key] = new Flyweight(key);
    }

    return this.cache[key];
  }
}
