const corama = () => {
  console.log("Async task");
  setTimeout(() => {
    console.log("From the time async");
  }, 2000);
};

const corama1 = (callback) => {
  console.log("Not async");
  callback();
};

corama();
corama1();
