// 9. Write a function to remove duplicate characters from the given string.
function removeDuplicates(str) {
  const letters = new Set(str.split(""));

  return Array.from(letters).join("");
}

console.log(removeDuplicates("apple"));
console.log(removeDuplicates("appppppppple"));
console.log(removeDuplicates("apfrfbhhfvfhhbhedhhhhfvkppple"));
