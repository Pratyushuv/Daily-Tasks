// Flatten Nested Arrays

let arr = [];
function flatArray(num) {
  if (typeof num === "number") return num;
  num.forEach((element) => {
    if (typeof element === "object") return flatArray(element);

    arr.push(element);
  });
  return arr;
}

console.log(flatArray([1, [2, [3, [4]], 5]]));
