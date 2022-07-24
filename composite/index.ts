import Leaf from "./leaf";
import Composite from "./composite";

function main() {
  const composite: Composite = new Composite();
  const leafA: Leaf = new Leaf("A");
  const leafB: Leaf = new Leaf("B");

  composite.add(leafA);
  composite.add(leafB);

  composite.printData();
}

main();
