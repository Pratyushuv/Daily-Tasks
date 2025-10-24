function fun1() {
  return new Promise((resolve, reject) => {
    resolve("First Promise");
  });
}

function fun2() {
  return new Promise((resolve, reject) => {
    resolve("Second Promise");
  });
}

function fun3() {
  return new Promise((resolve, reject) => {
    resolve("Third Promise");
  });
}

const promises = [fun1(), fun2(), fun3()];
console.log(promises);

Promise.allSettled(promises).then((res) =>
  res.forEach((r) => {
    console.log("Status: " + r.status + " " + "Value: " + r.value);
  })
);
