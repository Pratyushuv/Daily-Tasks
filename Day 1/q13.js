// 13. Write a program that takes a list of strings as input and returns the longest word among them.

function longestWord(str) {
  let maxl = 0;
  let maxw = "";

  str.forEach((w) => {
    if (w.length > maxl) {
      maxl = w.length;
      maxw = w;
    }
  });
  return maxw;
}

console.log(longestWord(["cat", "dog", "elephant", "tiger"]));
console.log(longestWord(["apple", "banana", "orange"]));
console.log(longestWord(["programming", "is", "fun"]));
