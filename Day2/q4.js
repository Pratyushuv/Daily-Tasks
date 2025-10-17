// 4. Write a function which accepts two arrays and a position value, where the values of the second array should be placed in the given position of the first array. The function should return an updated array.

function updateArray(arr1, arr2, pos) {
  let arr = [];
  const n = arr1.length;

  for (let i = 0; i < n; i++) {
    if (i === pos) arr.push(arr2);
    arr.push(arr1[i]);
  }
  console.log(arr.flat());
}

updateArray([1, 2, 3], [4, 5, 6], 2);
