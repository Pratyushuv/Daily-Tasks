function isValidNumber(num) {
  const infinity = 10 ** 1000;

  if (num < infinity) console.log("Finite Number");
  else console.log(infinity);
}

isValidNumber(290343);
isValidNumber(10 ** 1000);
