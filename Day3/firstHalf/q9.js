// 4. Write a program that determines if a string is an anagram of another string. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.

function isAnagram(word1, word2) {
  const letters1 = word1.split("");
  const letters2 = word2.split("");
  const sorted1 = letters1.sort();
  const sorted2 = letters2.sort();

  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] != sorted2[i]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("silent", "Listen"));
console.log(isAnagram("restful", "fluster"));
console.log(isAnagram("hello", "world"));
