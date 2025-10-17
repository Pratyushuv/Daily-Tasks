// 5. Write a program that takes a string as input and returns the frequency of each character in the string.

function frequency(str) {
  const obj = {};
  const letters = str.split("");
  for (let i = 0; i < letters.length; i++) {
    char = letters[i];
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  return obj;
}

console.log(frequency("hello"));
console.log(frequency("programming"));
