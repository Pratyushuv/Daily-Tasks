function myReduce(arr, cBack, initial) {
  let newArr = [];

  if (typeof initial === "number") console.log("hi");
  else initial = arr[0];

  console.log(initial);

  newArr.push(cBack(arr, initial));
  return newArr;
}

const arr = [34, 4, 10, 12, 14, 20];

function cBack(arr, initial) {
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 && arr[i] === initial) continue;
    initial = initial + arr[i];
  }

  return initial;
}

let initial = 0;

console.log(myReduce(arr, cBack, initial));
