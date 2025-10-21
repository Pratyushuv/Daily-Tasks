const obj = {
  user: { name: "john", age: 25 },
};

const newObj = JSON.parse(JSON.stringify(obj));

console.log(newObj); //obj and newObj refernce the same object
