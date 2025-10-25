// 10. Write a program that takes a list of strings as input and returns the longest common prefix among the strings.

function longestCommonPrefix(str) {
  let small = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i].length < small.length) {
      small = str[i];
    }
  }

  //   let k = 0;
  let prefix = "";

  for (let i = 0; i < str.length; i++) {
    let char = small[i];

    const p = str.every((s) => s[i] === char);
    if (p) prefix = prefix + char;
  }
  console.log(prefix);
}

longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["dog", "racecar", "car"]);
longestCommonPrefix(["apple", "app", "application"]);
longestCommonPrefix(["pratdfdf", "prattdf", "pratadft", "pratpraty"]);
