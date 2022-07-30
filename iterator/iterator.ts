import Tree from "./tree";

export default interface Iterator {
  current: Tree;

  printCurrent();
  getNext();
  hasMore(): Boolean;
}
