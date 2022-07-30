export default class Tree {
  public left: Tree;
  public right: Tree;
  public node: Number;

  constructor(node: Number) {
    this.node = node;
  }
}
