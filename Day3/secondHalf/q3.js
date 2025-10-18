function transpose(arr) {
  const newarr = [];
  let temparr = [];

  for (let i = 0; i < arr[0].length; i++) {
    arr.forEach((el) => {
      temparr.push(el[i]);
    });
    newarr.push(temparr);
    temparr = [];
  }

  console.log(newarr);
}

transpose([
  [2, 9, 0],
  [7, 1, 5],
]);
