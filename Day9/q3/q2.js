//Custom filter function

function myFilter(arr, cBack) {
  let newArr = [];

  arr.forEach((a) => {
    if (cBack(a)) newArr.push(a);
  });
  return newArr;
}

const arr = [34, 4, 10, 12, 14, 20];

function cBack(element) {
  if (element > 10) return true;
}

console.log(myFilter(arr, cBack));
