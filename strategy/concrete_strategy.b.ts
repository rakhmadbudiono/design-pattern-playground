import Strategy from "./strategy";

export default class ConcreteStrategyB implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}
