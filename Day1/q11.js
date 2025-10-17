// 11. Write a program that determines if a given number is a perfect square. A perfect square is an integer that is equal to the square of another integer.

function isPerfectSquare(num) {
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (i * i === num) return true;
  }
  return false;
}

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(10));
console.log(isPerfectSquare(25));
