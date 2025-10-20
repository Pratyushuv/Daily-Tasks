function convertToNumber(arr) {
  arr.forEach((a) => {
    console.log(Number(a));
  });
}

convertToNumber(["42", "42px", "", "null", null, undefined, true, false]);
