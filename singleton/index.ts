import Singleton from "./singleton";

function main() {
  const isSameObject = Singleton.getInstance() === Singleton.getInstance();

  if (isSameObject) {
    console.log("Singleton");

    return;
  }

  console.log("Not Singleton");
}

main();
