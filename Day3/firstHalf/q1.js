// function flatArray(num) {
//   console.log(num.flat(3));
// }
// flatArray([1, [2, [3, [4]], 5]]);
var arr = [];
function flatArray(num) {
  if (typeof num === "number") return num;
  num.forEach((element) => {
    if (typeof element === "object") return flatArray(element);

    arr.push(element);
  });
}
flatArray([1, [2, [3, [4]], 5]]);
console.log(arr);
