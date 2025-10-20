function sumOfDigits(num) {
  const number = num.toString();
  const n = number.length;
  sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + Number(number[i]);
  }

  console.log(sum);
}

sumOfDigits(2345);
sumOfDigits(3745);
