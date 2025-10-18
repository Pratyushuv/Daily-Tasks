// 3. Invert Keys and Values in an Object

function invert(obj) {
  const newObj = {};

  for ([key, value] of Object.entries(obj)) {
    newObj[value] = key;
  }
  console.log(newObj);
}

invert({ a: 1, b: 2 });
