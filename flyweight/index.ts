import Flyweight from "./flyweight";
import FlyweightFactory from "./flyweight_factory";

const MAX_NUM = 10;

function main() {
  const factory: FlyweightFactory = new FlyweightFactory();

  for (let i: number = 1; i <= MAX_NUM; i++) {
    const repeatingState: string = isOdd(i) ? "odd" : "even";
    const flyweight: Flyweight = factory.getFlyweight(repeatingState);

    flyweight.printFact(i);
  }
}

function isOdd(num: number) {
  return num % 2 == 1;
}

main();
