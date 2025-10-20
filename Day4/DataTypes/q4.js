function validNumber(num) {
  if (typeof num === "number") return true;
  else return false;
}

console.log(validNumber(5));
console.log(validNumber("6"));
console.log(validNumber());
