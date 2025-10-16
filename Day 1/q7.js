// 7. Write a program that takes a sentence as input and returns the longest word in the sentence.

function longestWord(str) {
  let maxl = 0;
  let maxw = "";
  const words = str.split(" ");
  words.forEach((w) => {
    if (w.length > maxl) {
      maxl = w.length;
      maxw = w;
    }
  });

  words.forEach((w) => {
    if (w.length === maxl && maxw != w) {
      maxw = maxw + " ";
      maxw = maxw + w;
      maxw = maxw + " ";
    }
  });

  return maxw;
}

console.log(longestWord("Hello world of programming"));
console.log(longestWord("The quick brown fox jumps over the lazy dog"));
console.log(longestWord("I love coding"));
