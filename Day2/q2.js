// 2. Write a program to find whether a given number is an Armstrong number ( An Armstrong number is the sum of its own digits, each raised to the power of the number of digits).

function armstrong(number) {
  let num = number;
  let arm = 0;
  let l;

  while (num > 0) {
    l = Math.floor(num % 10);
    arm = arm + l * l * l;
    num = num / 10;
  }

  if (arm === number) {
    return true;
  } else {
    return false;
  }
}

console.log(armstrong(153));
console.log(armstrong(123));
