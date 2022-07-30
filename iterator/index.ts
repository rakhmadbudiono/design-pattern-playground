import BFSIterator from "./bfs_iterator";
import DFSIterator from "./dfs_iterator";
import Iterator from "./iterator";
import Tree from "./tree";
import TreeFactory from "./tree_factory";

function main() {
  const factory: TreeFactory = new TreeFactory();
  const tree: Tree = factory.createDummyTree();

  const bfs: Iterator = new BFSIterator(tree);
  const dfs: Iterator = new DFSIterator(tree);

  iterate(bfs);
  console.log("================");
  iterate(dfs);
}

function iterate(iterator: Iterator) {
  let it: Iterator = iterator;

  while (it.hasMore()) {
    it.printCurrent();
    it.getNext();
  }
}

main();
