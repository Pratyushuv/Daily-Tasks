const obj = {
  user: { name: "john", age: 25 },
};

const newObj = JSON.parse(JSON.stringify(obj));

console.log(newObj);
