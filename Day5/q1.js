function parity(arr) {
  let oddArr = [];
  let evenArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) evenArr.push(arr[i]);
    else oddArr.push(arr[i]);
  }
  console.log(evenArr.concat(oddArr));
}

parity([3, 2, 4, 1, 5, 8]);
