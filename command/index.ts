import Command from "./command";
import ConcreteCommand from "./concrete_command";
import Receiver from "./receiver";

const MORBING_TIME: String = "it's morbing time";

function main() {
  const receiver: Receiver = new Receiver();
  const command: Command = new ConcreteCommand(receiver, MORBING_TIME);

  command.execute();
}

main();
