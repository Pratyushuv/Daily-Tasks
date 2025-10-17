function nArgSum(...num) {
  return num.reduce((acc, cur) => acc + cur, 0);
}

console.log(nArgSum(1, 2, 3, 4));
console.log(nArgSum(1, 2));
console.log(nArgSum(1, 2, 6, 9));
