export default interface Handler {
  setNext(next: Handler);
  handle();
}
