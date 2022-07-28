import Handler from "./handler";

export default abstract class BaseHandler implements Handler {
  protected next: Handler;

  public setNext(next: Handler) {
    this.next = next;
  }

  public abstract handle();
}
