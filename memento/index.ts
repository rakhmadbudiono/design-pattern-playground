import Caretaker from "./caretaker";
import Originator from "./orginator";

function main() {
  const originator: Originator = new Originator();
  const caretaker: Caretaker = new Caretaker(originator);

  originator.operation("A");
  caretaker.backup();
  originator.printState();
  originator.operation("B");
  originator.printState();
  caretaker.undo();
  originator.printState();
}

main();
