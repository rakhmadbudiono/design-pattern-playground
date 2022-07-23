export default class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance() {
    if (this.instance == null) {
      this.instance = new Singleton();
    }

    return this.instance;
  }
}
