function isArray(obj, arr, ...rest) {
  console.log(Array.isArray(obj));
  console.log(Array.isArray(arr));
  console.log(Array.isArray(rest));
}

isArray({}, [], 1, 2, 3, 4);
