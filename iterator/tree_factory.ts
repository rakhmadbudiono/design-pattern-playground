import Tree from "./tree";

export default class TreeFactory {
  public createDummyTree() {
    const tree: Tree = new Tree(0);
    tree.left = new Tree(1);
    tree.right = new Tree(2);
    tree.left.left = new Tree(3);
    tree.left.right = new Tree(4);
    tree.right.left = new Tree(5);
    tree.right.right = new Tree(6);

    return tree;
  }
}
