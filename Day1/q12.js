// 12. Write a program that finds the maximum product of three numbers in a given list of integers.

function maxProd(num) {
  const n = num.length;
  let temp;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (num[j] > num[j + 1]) {
        temp = num[j];
        num[j] = num[j + 1];
        num[j + 1] = temp;
      }
    }
  }
  //   console.log(num.slice(-3));
  console.log(num.slice(-3).reduce((acc, n) => acc * n, 1));
}

maxProd([1, 2, 3, 4]);
maxProd([-4, -3, -2, -1, 0]);
maxProd([-1, -2, -3, -4, -5]);
