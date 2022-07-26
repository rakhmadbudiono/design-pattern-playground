import UniqueState from "./unique_state";

export default class Flyweight {
  repeatingState: string;

  constructor(repeatingState: string) {
    this.repeatingState = repeatingState;
  }

  public printFact(uniqueState: UniqueState) {
    console.log(uniqueState, " is ", this.repeatingState);
  }
}
