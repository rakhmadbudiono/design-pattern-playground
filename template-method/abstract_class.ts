export default abstract class AbstractClass {
  public templateMethod() {
    this.baseOperation1();
    this.requiredOperations1();
    this.baseOperation2();
    this.hook1();
    this.requiredOperation2();
    this.baseOperation3();
    this.hook2();
  }

  protected baseOperation1() {
    console.log("AbstractClass says: I am doing the bulk of the work");
  }

  protected baseOperation2() {
    console.log(
      "AbstractClass says: But I let subclasses override some operations"
    );
  }

  protected baseOperation3() {
    console.log(
      "AbstractClass says: But I am doing the bulk of the work anyway"
    );
  }

  protected abstract requiredOperations1();

  protected abstract requiredOperation2();

  protected hook1() {}

  protected hook2() {}
}
