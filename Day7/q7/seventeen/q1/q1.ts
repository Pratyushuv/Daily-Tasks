type numArray = number[];

function ReturnSum(num: numArray[]) {
  let sum: number = 0;

  num.forEach((n) => {
    console.log(n);
    const number: number = parseInt(n.join(""));
    sum = sum + number;
  });
  return sum;
}

console.log(
  ReturnSum([
    [1, 2, 3],
    [0, 7],
  ])
);
