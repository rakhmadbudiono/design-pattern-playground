import Observer from "./observer";

export default interface Subject {
  attach(observer: Observer);
  detach(observer: Observer);
  notify();
}
