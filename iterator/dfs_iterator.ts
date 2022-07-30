import Iterator from "./iterator";
import Tree from "./tree";
import Stack from "./stack";

export default class DFSIterator implements Iterator {
  public current: Tree;
  private stack: Stack<Tree>;

  constructor(tree: Tree) {
    this.current = tree;
    this.stack = new Stack();
  }

  public printCurrent() {
    console.log(this.current.node);
  }

  public getNext() {
    if (this.current.right != null) this.stack.push(this.current.right);
    if (this.current.left != null) this.stack.push(this.current.left);

    this.current = this.stack.pop();
  }

  public hasMore(): Boolean {
    return (
      this.current.left != null ||
      this.current.right != null ||
      this.stack.size() != 0
    );
  }
}
