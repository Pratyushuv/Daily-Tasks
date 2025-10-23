type narray = number[];

function NArgSum(...num: narray) {
  return num.reduce((acc, cur) => acc + cur, 0);
}

console.log(NArgSum(1, 2, 3, 4));
console.log(NArgSum(1, 2));
console.log(NArgSum(1, 2, 6, 9));
