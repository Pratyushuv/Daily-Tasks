// 1. Write a program that should interpret each array item as a number, and return the sum.

function returnSum(num) {
  let sum = 0;

  num.forEach((n) => {
    console.log(n);
    const number = parseInt(n.join(""));
    sum = sum + number;
  });
  return sum;
}

console.log(
  returnSum([
    [1, 2, 3],
    [0, 7],
  ])
);
