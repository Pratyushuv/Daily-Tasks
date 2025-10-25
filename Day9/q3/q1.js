function myMap(arr, cBack) {
  let newArr = [];

  arr.forEach((a) => {
    newArr.push(cBack(a));
  });
  return newArr;
}

const arr = [34, 4, 10, 12, 14, 20];

function cBack(element) {
  return element * 10;
}

console.log(myMap(arr, cBack));
