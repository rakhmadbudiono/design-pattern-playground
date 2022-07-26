import Facade from "./facade";
import Subsystem1 from "./subsystem_1";

function main() {
  const subsystem1 = new Subsystem1();
  const facade = new Facade(subsystem1);

  facade.tellTime();
}

main();
