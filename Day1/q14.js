// 14. Write a program that checks if a given string is a palindrome, ignoring spaces and punctuation.

function isPalindrome(str) {
  const newStr = str
    .replaceAll(",", "")
    .replaceAll("!", "")
    .toLowerCase()
    .split(" ")
    .join("");
  //   console.log(newStr);

  let low = 0;
  let high = newStr.length - 1;
  let flag = true;
  while (low < high) {
    if (newStr[low] != newStr[high]) {
      flag = false;
      break;
    } else {
      low++;
      high--;
    }
  }

  if (flag) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("A man, a plan, a canal, Panama!"));
console.log(isPalindrome("Racecar"));
console.log(isPalindrome("Hello, world!"));
