import Iterator from "./iterator";
import Tree from "./tree";
import Queue from "./queue";

export default class BFSIterator implements Iterator {
  public current: Tree;
  private queue: Queue<Tree>;

  constructor(tree: Tree) {
    this.current = tree;
    this.queue = new Queue<Tree>();
  }

  public printCurrent() {
    console.log(this.current.node);
  }

  public getNext() {
    if (this.current.left != null) this.queue.enqueue(this.current.left);
    if (this.current.right != null) this.queue.enqueue(this.current.right);

    this.current = this.queue.dequeue();
  }

  public hasMore(): Boolean {
    return (
      this.current.left != null ||
      this.current.right != null ||
      this.queue.size() != 0
    );
  }
}
