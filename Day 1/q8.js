// 8. Write a program that finds the missing number in an array containing consecutive integers from 1 to n, with one number missing.

function missingNumber(num) {
  const n = num.length;
  const end = num[n - 1];

  const arr = [];
  let flag = false;

  for (let i = 1; i <= end; i++) {
    flag = false;
    for (let j = 0; j < end; j++) {
      if (i === num[j]) {
        flag = true;
        break;
      }
    }
    if (flag === false) {
      arr.push(i);
    }
  }
  console.log(arr);
}

missingNumber([1, 2, 3, 5, 6]);
missingNumber([10, 11, 13, 14, 15]);
missingNumber([2, 3, 4, 5, 6]);
