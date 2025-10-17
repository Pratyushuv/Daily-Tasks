// 1. Write a program that checks if a given number is prime.

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(29));
