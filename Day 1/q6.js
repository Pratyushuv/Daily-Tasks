// 6. Write a program that takes a list of integers as input and returns the sum of all the numbers divisible by 3.

function divisibleSum(num) {
  let sum = 0;
  num.forEach((n) => {
    if (n % 3 === 0) {
      sum = sum + n;
    }
  });
  return sum;
}

console.log(divisibleSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(divisibleSum([10, 20, 30, 40, 50]));
console.log(divisibleSum([15, 25, 35, 45, 55]));
