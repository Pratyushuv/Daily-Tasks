// 3. Write a program that takes a list of integers as input and returns a new list with only the even numbers.

function evenList(num) {
  const arr = [];
  num.forEach((n) => {
    if (n % 2 === 0) {
      arr.push(n);
    }
  });
  return arr;
}

console.log(evenList([1, 2, 3, 4, 5, 6]));
console.log(evenList([7, 8, 9, 10, 11, 12]));
console.log(evenList([2, 4, 6, 8, 10]));
